import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { ExtensionAttrCleaner } from "@/components/extension-attr-cleaner";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.shortName} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Quarkus",
    "Node.js",
    "NestJS",
    "Python",
    "Flask",
    "Microservices",
    "Bandung",
    "Indonesia",
    profile.shortName,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.shortName} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — ${profile.role}`,
    description: profile.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Inline script — runs before React hydration. Some browser extensions
// (Bitdefender TrafficLight/Anti-tracker, etc.) inject `bis_skin_checked`
// and `bis_register` attributes on every <div>, causing hydration mismatch
// warnings. We strip them once before hydration and keep a MutationObserver
// to clean them up if the extension re-injects.
const stripExtensionAttrsScript = `
(function () {
  var attrs = ['bis_skin_checked', 'bis_register'];
  function clean(root) {
    if (!root || root.nodeType !== 1) return;
    for (var i = 0; i < attrs.length; i++) {
      if (root.hasAttribute && root.hasAttribute(attrs[i])) {
        root.removeAttribute(attrs[i]);
      }
    }
    if (root.querySelectorAll) {
      var sel = attrs.map(function (a) { return '[' + a + ']'; }).join(',');
      var matches = root.querySelectorAll(sel);
      for (var j = 0; j < matches.length; j++) {
        for (var k = 0; k < attrs.length; k++) {
          matches[j].removeAttribute(attrs[k]);
        }
      }
    }
  }
  clean(document.documentElement);
  try {
    var mo = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'attributes' && m.attributeName) {
          m.target.removeAttribute(m.attributeName);
        } else if (m.type === 'childList') {
          for (var j = 0; j < m.addedNodes.length; j++) {
            clean(m.addedNodes[j]);
          }
        }
      }
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: attrs,
      childList: true,
      subtree: true,
    });
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head suppressHydrationWarning>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: stripExtensionAttrsScript }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ExtensionAttrCleaner />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
