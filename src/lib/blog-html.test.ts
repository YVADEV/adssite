import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { formatBlogHtml, readingMinutes } from "./blog-html";

describe("formatBlogHtml", () => {
  it("keeps a single document H2 outline and IDs for TOC", () => {
    const { html, headings } = formatBlogHtml(
      "<h2><b>Ce este tartrul dentar?</b></h2><p><span>Text.</span></p>",
    );
    assert.equal(headings.length, 1);
    assert.equal(headings[0]?.text, "Ce este tartrul dentar?");
    assert.match(html, /<h2 id="ce-este-tartrul-dentar">Ce este tartrul dentar\?<\/h2>/);
    assert.equal(html.includes("<span>"), false);
    assert.equal(html.includes("<b>"), false);
  });

  it("promotes H3/H4 to start at H2 when the article has no H2", () => {
    const { html, headings } = formatBlogHtml(
      "<h3>Procedura de sinus lift</h3><h4>O soluție</h4><p>Text</p>",
    );
    assert.equal(headings[0]?.text, "Procedura de sinus lift");
    assert.match(html, /<h2 id="[^"]+">Procedura de sinus lift<\/h2>/);
    assert.match(html, /<h3 id="[^"]+">O soluție<\/h3>/);
  });

  it("turns paragraph images into figures without rewriting copy", () => {
    const { html } = formatBlogHtml(
      '<p><img src="/blog/inline/a.jpg" alt="Sinus lift" width="1200" height="800" /></p>',
    );
    assert.match(html, /<figure class="ads-blog-figure">/);
    assert.match(html, /alt="Sinus lift"/);
    assert.match(html, /loading="lazy"/);
    assert.equal(html.includes("Sinus lift"), true);
  });

  it("does not invent a reading time of zero", () => {
    assert.equal(readingMinutes("<p>unu doi trei</p>") >= 1, true);
  });
});
