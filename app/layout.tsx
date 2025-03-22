import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "@/app/ui/globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "SCH SoundWorks",
  description: "SCH SoundWorks is a place where passion meets audio.",
  icons: ['/favicon.ico']
};


const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/alta-pagina', label: 'alta pagina?' },
  { href: '/blog', label: 'blog' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <div className="bg-neutral-900 opacity-90 fixed top-0 pl-2 pr-2 sm:pl-8 sm:pr-8 h-12 sm:h-16 w-[100vw] border-b-[1px] border-neutral-700">
          <div className="flex justify-self-center h-full items-center justify-between w-full max-w-[2048px]">
            <Link href="/">
              <Image
                src="/favicon.ico"
                alt="Stefan Andrei - Logo"
                width={48}
                height={48}
                priority
                unoptimized
                style={{ width: "auto", height: 36 }}
              />
            </Link>

            <div>

              {links.map(({ href, label }) => (
                <Link key={href} href={href}
                  className="text-l ml-4 sm:text-xl font-bold text-zinc-600 hover:text-yellow-300 transition-colors hover:underline leading-[0.8] sm:leading-[0.9]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
        {children}
      </body>
    </html>
  );
}
