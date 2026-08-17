import { featureList, compareList } from "@/content/usecases";

const APP = "https://app.myshorts.in";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <defs><linearGradient id="mswf" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FF7A5A" /><stop offset="1" stopColor="#F5342B" /></linearGradient></defs>
                <rect x="6" y="6" width="36" height="36" rx="11" fill="url(#mswf)" />
                <path d="M20 16.5 L32 24 L20 31.5 Z" fill="#fff" />
                <path d="M14 12 l1.1 2.4 2.4 1.1 -2.4 1.1 -1.1 2.4 -1.1 -2.4 -2.4 -1.1 2.4 -1.1 Z" fill="#fff" />
              </svg>
            </span>
            <span className="brand-word">MyShorts<span className="brand-ai">.in</span></span>
          </a>
          <p>Turn long videos into Shorts people actually watch.</p>
        </div>
        <nav className="footer-cols" aria-label="Footer">
          <div>
            <h4>Tools</h4>
            <a href="/#top">Make Shorts</a>
            {featureList.map((u) => (<a key={u.slug} href={`/${u.slug}`}>{u.navLabel}</a>))}
          </div>
          <div><h4>Product</h4><a href="/#features">Features</a><a href="/#how">How it works</a><a href="/#pricing">Pricing</a></div>
          <div><h4>Company</h4><a href="/blog">Blog</a><a href="/#faq">FAQ</a><a href={APP}>Sign in</a></div>
          <div>
            <h4>Compare</h4>
            <a href="/alternatives">All alternatives</a>
            {compareList.slice(0, 4).map((u) => (<a key={u.slug} href={`/${u.slug}`}>{u.navLabel}</a>))}
            <a href="/privacy">Privacy</a><a href="/terms">Terms</a>
          </div>
        </nav>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} MyShorts</span>
        <span>Not affiliated with YouTube. YouTube is a trademark of Google LLC.</span>
        <span>Made for creators, in India.</span>
      </div>
    </footer>
  );
}
