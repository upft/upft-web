import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "DataForger",
  description: "Unified Platform For Testing",
  icons: [{ rel: "icon", url: "favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W7JS6RZF');
              `,
          }}
        ></script>
        <script
          src="//code.tidio.co/cza6lntzrlntpanqcetus9asnb6sen65.js"
          async
        ></script>
      </head>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased custom-purple text-gray-200 tracking-tight`}
      >
        <Header />
        <div className="flex flex-col min-h-screen">{children}</div>
        <script
          type="text/javascript"
          src="https://app.termly.io/embed.min.js"
          data-auto-block="on"
          data-website-uuid="839c8578-556e-4087-8c8d-884a9405d54f"
        ></script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-W7JS6RZF"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>`,
          }}
        ></noscript>
      </body>
    </html>
  );
}
