import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sirajtech.work"),
  title: "Siraj Mohammed | Full-Stack & Backend Software Engineer",
  description: "Full-stack developer with a strong backend focus building production-ready systems with Go, TypeScript, Python, PostgreSQL, Next.js, and modern backend technologies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Siraj Mohammed | Full-Stack & Backend Software Engineer",
    description: "Full-stack developer with a strong backend focus building production-ready systems with Go, TypeScript, Python, PostgreSQL, Next.js, and modern backend technologies.",
    siteName: "Siraj Mohammed Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Siraj Mohammed | Full-Stack & Backend Software Engineer",
    description: "Full-stack developer with a strong backend focus building production-ready systems with Go, TypeScript, Python, PostgreSQL, Next.js, and modern backend technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof window !== 'undefined') {
                  const patchMql = (mql) => {
                    if (!mql) return mql;
                    if (typeof mql.addListener !== 'function' && typeof mql.addEventListener === 'function') {
                      mql.addListener = function(cb) { this.addEventListener('change', cb); };
                    }
                    if (typeof mql.removeListener !== 'function' && typeof mql.removeEventListener === 'function') {
                      mql.removeListener = function(cb) { this.removeEventListener('change', cb); };
                    }
                    return mql;
                  };

                  if (typeof window.matchMedia !== 'function') {
                    window.matchMedia = function(query) {
                      return patchMql({
                        matches: false,
                        media: query,
                        onchange: null,
                        addEventListener: function() {},
                        removeEventListener: function() {},
                        dispatchEvent: function() { return false; },
                      });
                    };
                  } else {
                    const originalMatchMedia = window.matchMedia;
                    window.matchMedia = function(query) {
                      try {
                        const mql = originalMatchMedia.call(window, query);
                        return patchMql(mql || {
                          matches: false,
                          media: query,
                          onchange: null,
                          addEventListener: function() {},
                          removeEventListener: function() {},
                          dispatchEvent: function() { return false; },
                        });
                      } catch (e) {
                        return patchMql({
                          matches: false,
                          media: query,
                          onchange: null,
                          addEventListener: function() {},
                          removeEventListener: function() {},
                          dispatchEvent: function() { return false; },
                        });
                      }
                    };
                  }

                  if (typeof window.MediaQueryList !== 'undefined' && window.MediaQueryList.prototype) {
                    const proto = window.MediaQueryList.prototype;
                    if (typeof proto.addListener !== 'function') {
                      proto.addListener = function(cb) { if (this.addEventListener) this.addEventListener('change', cb); };
                    }
                    if (typeof proto.removeListener !== 'function') {
                      proto.removeListener = function(cb) { if (this.removeEventListener) this.removeEventListener('change', cb); };
                    }
                  }
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
