import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DirCraft - Create Folder Structures at Light Speed | VS Code Extension",
  description: "Stop wasting time creating folders manually. DirCraft generates complex directory structures in milliseconds with a single command. Free VS Code extension for developers.",
  keywords: "VS Code extension, folder structure, directory creator, productivity tool, developer tools, DirCraft, project scaffolding",
  authors: [{ name: "DirCraft" }],
  creator: "DirCraft",
  publisher: "DirCraft",
  openGraph: {
    title: "DirCraft - Create Folder Structures at Light Speed",
    description: "Generate complex folder structures in milliseconds. Free VS Code extension that transforms your workflow.",
    url: "https://yourwebsite.com",
    siteName: "DirCraft",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DirCraft - VS Code Extension",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DirCraft - Create Folder Structures at Light Speed",
    description: "Generate complex folder structures in milliseconds with this free VS Code extension.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}