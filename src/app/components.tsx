"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { navItems, reviewItems } from "./site-data";

export function SiteShell({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "theme-dark" : "theme-light"}>
      <div className="page-wrap">
        <TopNav dark={dark} />
        {children}
        <Footer dark={dark} />
      </div>
    </div>
  );
}

function TopNav({ dark }: { dark: boolean }) {
  const pathname = usePathname();

  return (
    <header className="top-nav">
      <Link href="/" className="brand">
        Programare-te acum
      </Link>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => {
            const active = item.href !== "#" && pathname === item.href;
            return (
              <li key={item.label}>
                <Link href={item.href} className={active ? "active" : ""}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className={`menu-dot ${dark ? "menu-dot-dark" : ""}`}
        aria-label="Deschide meniul"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function Footer({ dark }: { dark: boolean }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-top">
        <a href="mailto:contact@alvernadental.com" className="mail-link">
          contact@alvernadental.com
        </a>
        <div className="footer-grid">
          <div>
            <p>Navigare</p>
            <Link href="/">Home</Link>
            <Link href="/servicii">Servicii</Link>
            <Link href="/cazuri">Proiecte</Link>
            <Link href="/tarife">Tarife</Link>
          </div>
          <div>
            <p>Social</p>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <h2 className={`footer-handle ${dark ? "footer-handle-dark" : ""}`}>
        @alvernadentalstudio
      </h2>
      <div className="footer-bottom">
        <span>© 2026 alvernadentalstudio. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export function ReviewGrid() {
  return (
    <section className="review-grid">
      <h2>Recenzii</h2>
      <div className="reviews">
        {reviewItems.map((item) => (
          <article key={item.author} className="review-card">
            <strong>{item.rating}</strong>
            <p>{item.text}</p>
            <span>{item.author}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
