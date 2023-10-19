import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import Link from "next/link"

import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { Seo } from "@/config/seo"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react';
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MainNav } from "@/components/main-nav"
import { NavMenu } from "@/components/main-nav2"
import { Separator } from "@/components/ui/separator"
import { SiteFooter } from "@/components/site-footer"
import { NavPlaygrounds } from "@/components/nav-playgrounds"
import { NavProducts } from "@/components/nav-products"


interface MarketingLayoutProps {
  children: React.ReactNode
}
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: Seo.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: Seo.home.description,
  keywords: [
    "API DevTool",
    "API Testing",
    "Postman Alternative",
    "API Devtool",
    "API Clients",
    "Open Source",
  ],
  authors: [
    {
      name: "Nishchit",
      url: "https://firecamp.io",
    },
  ],
  creator: "Nishchit",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Seo.home.url,
    title: Seo.home.title,
    description: Seo.home.description,
    siteName: Seo.home.siteName,
    images: [Seo.home.image],
  },
  twitter: {
    card: "summary_large_image",
    title: Seo.home.title,
    description: Seo.home.description,
    images: [Seo.home.image],
    creator: Seo.home.creatorName,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: `${Seo.home.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <div className="flex min-h-screen flex-col">
            <header className="px-3 sm:px-10 z-40 bg-background flex items-center justify-between py-6">
              {/* <div className="flex h-20 items-center justify-between py-6"> */}
              {/* <MainNav items={marketingConfig.mainNav} /> */}
              <NavMenu />
              <nav className="flex flex-row items-center justify-center gap-x-1 sm:gap-x-3">
                <Link
                  href={siteConfig.links.platform}
                  className={cn(buttonVariants({ size: "sm" }), 'scale-[85%] sm:scale-100')}
                  target="_blank"
                >
                  Launch Firecamp
                </Link>
                <HamburgerMenu />
              </nav>
              {/* </div> */}
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>

          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}


const links: { href: string, title: string }[] = [
  {
    title: "Documentation",
    href: "/docs"
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Blogs",
    href: "/blogs"
  },
]

function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Icons.hamburger className="block lg:hidden" />
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll py-10 px-2">
        <NavPlaygrounds />

        <Separator className="my-5 h-2" />

        <NavProducts />

        <Separator className="my-5 h-2" />

        <div className="flex flex-col gap-5 sm:gap-7">
          {links.map((link) => (
            <SheetClose className="text-left" key={link.href}>
              <Link
                href={link.href}
                className="text-[1.75rem] sm:text-4xl font-bold"
              >
                {link.title}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
} 