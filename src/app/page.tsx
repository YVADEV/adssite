import HomePageClient from "@/components/home/HomePageClient";

export default function Home() {
  return (
    <div id="main" tabIndex={-1} className="outline-none">
      <link
        rel="preload"
        as="image"
        href="/hero1-poster-640.jpg"
        media="(max-width: 768px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/hero1-poster-1920.jpg"
        media="(min-width: 769px)"
        fetchPriority="high"
      />
      <HomePageClient />
    </div>
  );
}
