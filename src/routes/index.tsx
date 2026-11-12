import { createFileRoute } from "@tanstack/react-router";
import {
  Apple,
  ArrowUpRight,
  CircleHelp,
  Globe,
  Monitor,
  Newspaper,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const platforms = [
  {
    label: "iOS",
    href: "https://apps.apple.com/us/app/wechat/id414478124?mt=8",
    icon: Apple,
  },
  {
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=com.tencent.mm",
    icon: Smartphone,
  },
  {
    label: "macOS",
    href: "https://apps.apple.com/us/app/wechat/id836500024",
    icon: Monitor,
  },
  {
    label: "Windows",
    href: "https://apps.microsoft.com/detail/xpfckbrnfzq62g?hl=en-US",
    icon: WindowIcon,
  },
];

const resources = [
  {
    label: "Newsroom",
    href: "https://newsroom.wechat.com/?lang=en",
    icon: Newspaper,
    tone: "resource-icon-news",
  },
  {
    label: "Safety Center",
    href: "https://safety.wechat.com/",
    icon: ShieldCheck,
    tone: "resource-icon-safety",
  },
  {
    label: "Help Center",
    href: "https://help.wechat.com/oshelpcenter/?lang=en&Channel=helpcenter",
    icon: CircleHelp,
    tone: "resource-icon-help",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WeChat — Connects with over 1 billion users" },
      {
        name: "description",
        content: "Connect with friends around the world using WeChat. Chats, calls, and more.",
      },
      { property: "og:title", content: "WeChat — Connects with over 1 billion users" },
      {
        property: "og:description",
        content: "Connect with friends around the world using WeChat. Chats, calls, and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="wechat-page">
      <section className="wechat-hero" aria-labelledby="wechat-title">
        <nav className="hero-language" aria-label="Language">
          <a href="https://www.wechat.com/zh_CN/">Weixin</a>
          <span className="language-divider" aria-hidden="true" />
          <a href="https://www.wechat.com/en/" aria-current="page">
            <Globe size={16} strokeWidth={1.7} />
            English
          </a>
        </nav>

        <div className="hero-content">
          <div className="wechat-wordmark" id="wechat-title" aria-label="WeChat">
            <ChatMark />
            <span>WeChat</span>
          </div>
          <p className="hero-description">
            Connects with over 1 billion users
            <br />
            Provides chats, calls, and more
          </p>
          <nav className="platform-list" aria-label="Download WeChat">
            {platforms.map(({ label, href, icon: Icon }) => (
              <a
                className="platform-link"
                href={href}
                key={label}
                target="_blank"
                rel="noreferrer"
                aria-label={`Download WeChat for ${label}`}
              >
                <Icon className="platform-icon" size={34} strokeWidth={1.75} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="resource-section" aria-label="WeChat resources">
        <div className="resource-list">
          {resources.map(({ label, href, icon: Icon, tone }) => (
            <a
              className="resource-link"
              href={href}
              key={label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className={`resource-icon ${tone}`} size={34} strokeWidth={2.1} aria-hidden="true" />
              <span>{label}</span>
              <ArrowUpRight className="resource-arrow" size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <footer className="wechat-footer">
        <nav className="footer-links" aria-label="Legal and contact">
          <a href="https://www.wechat.com/en/contact_us.html">Contact Us</a>
          <span aria-hidden="true">|</span>
          <a href="https://www.wechat.com/en/service_terms.html">Terms of Service</a>
          <span aria-hidden="true">|</span>
          <a href="https://www.wechat.com/en/privacy_policy.htm">Privacy Policy</a>
          <span aria-hidden="true">|</span>
          <a href="https://www.wechat.com/en/acceptable_use_policy.html">Acceptable Use Policy</a>
        </nav>
        <p className="copyright">Copyright © 2012-2026 WeChat. All Rights Reserved.</p>
        <nav className="social-links" aria-label="WeChat social media">
          <a href="https://www.facebook.com/WeChatApp/" aria-label="Facebook" target="_blank" rel="noreferrer">
            f
          </a>
          <a href="https://x.com/WeChatApp" aria-label="X" target="_blank" rel="noreferrer">
            𝕏
          </a>
          <a href="https://www.linkedin.com/company/wechat/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            in
          </a>
        </nav>
      </footer>
      <div className="page-tail" aria-hidden="true" />
    </main>
  );
}

function ChatMark() {
  return (
    <svg className="chat-mark" viewBox="0 0 66 54" fill="none" aria-hidden="true">
      <path
        d="M29.3 1C13.7 1 1 10.7 1 22.7c0 6.6 3.8 12.5 9.9 16.4l-2.5 9.1 10.8-5.5c3.1.8 6.5 1.2 10.1 1.2 15.6 0 28.3-9.7 28.3-21.7C57.6 10.7 44.9 1 29.3 1Z"
        fill="currentColor"
      />
      <path
        d="M31.8 29.3c0-10.6 10.7-19.2 24-19.2s24 8.6 24 19.2c0 5.9-3.4 11.1-8.8 14.6l2.2 8.1-9.6-4.9c-2.5.9-5.1 1.4-7.8 1.4-13.3 0-24-8.6-24-19.2Z"
        transform="translate(-11.8 1)"
        fill="currentColor"
      />
      <circle cx="20" cy="20" r="2.5" className="chat-mark-dot" />
      <circle cx="34" cy="20" r="2.5" className="chat-mark-dot" />
      <circle cx="40" cy="31" r="2.2" className="chat-mark-dot" />
      <circle cx="52" cy="31" r="2.2" className="chat-mark-dot" />
    </svg>
  );
}

function WindowIcon({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 6.1 14.7 4.5v10.9H3V6.1Zm13.2-1.9L29 2.3v13.1H16.2V4.2ZM3 17.1h11.7V28L3 26.4V17.1Zm13.2 0H29v13.1l-12.8-1.8V17.1Z" />
    </svg>
  );
}