import "./css/style.css";
import { Inter, Architects_Daughter } from "next/font/google";

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
  title: "UPFT, Inc.",
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
      </head>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased custom-purple text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
