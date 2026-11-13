import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { LEGACY_REDIRECTS } from "../config/legacy-redirects";
import { pageMetadata, SITE_URL, STATIC_ROUTES } from "./seo";
import { isStagingHost, PRODUCTION_ORIGIN, withTrailingSlash } from "./site";

describe("production SEO origin", () => {
  it("locks SITE_URL to alvernadental.com", () => {
    assert.equal(SITE_URL, "https://alvernadental.com");
    assert.equal(PRODUCTION_ORIGIN, "https://alvernadental.com");
    assert.equal(SITE_URL.includes("netlify.app"), false);
  });

  it("builds self-referencing canonicals on alvernadental.com", () => {
    const implant = pageMetadata({
      title: "Implant dentar",
      description: "Test",
      path: "/servicii/implant-dentar/",
    });
    assert.equal(implant.alternates?.canonical, "https://alvernadental.com/servicii/implant-dentar/");
    assert.equal(implant.openGraph?.url, "https://alvernadental.com/servicii/implant-dentar/");
    const serialized = JSON.stringify(implant);
    assert.equal(serialized.includes("netlify.app"), false);
    assert.equal(serialized.includes("quiet-daffodil"), false);
  });

  it("keeps homepage canonical on the homepage, not a inner path", () => {
    const home = pageMetadata({ title: "Home", description: "Test", path: "/" });
    assert.equal(home.alternates?.canonical, "https://alvernadental.com/");
  });
});

describe("staging host detection", () => {
  it("treats Netlify hosts as staging without using NODE_ENV", () => {
    assert.equal(isStagingHost("alvernadental.netlify.app"), true);
    assert.equal(isStagingHost("quiet-daffodil-0aeb6a.netlify.app"), true);
    assert.equal(isStagingHost("6af5edd5a4beca9ad5cd4b31--alvernadental.netlify.app"), true);
    assert.equal(isStagingHost("alvernadental.com"), false);
    assert.equal(isStagingHost("www.alvernadental.com"), false);
  });
});

describe("trailing slashes", () => {
  it("normalizes paths used in metadata and sitemap", () => {
    assert.equal(withTrailingSlash("/cazuri"), "/cazuri/");
    assert.equal(withTrailingSlash("/cazuri/"), "/cazuri/");
    assert.equal(withTrailingSlash("/"), "/");
    for (const route of STATIC_ROUTES) {
      assert.equal(route.endsWith("/") || route === "/", true, route);
    }
  });
});

describe("legacy redirects", () => {
  it("has no loops or staging destinations", () => {
    const sources = new Set(LEGACY_REDIRECTS.map((row) => row.source));
    for (const row of LEGACY_REDIRECTS) {
      assert.equal(row.statusCode, 301);
      assert.equal(row.destination.endsWith("/"), true, row.destination);
      assert.equal(row.destination.includes("netlify.app"), false);
      assert.notEqual(row.source, row.destination);
      assert.equal(sources.has(row.destination), false, `destination is also a source: ${row.destination}`);
    }
  });
});
