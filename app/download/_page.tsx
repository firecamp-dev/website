"use client";

import Link from "next/link";
import { Seo } from "@/config/seo";
import Image from "next/image";

export const metadata = {
  title: Seo.download.title,
  description: Seo.download.description,
};

export default function DownloadPage() {
  return (
    <section className="container flex flex-col gap-10 py-8 md:max-w-[64rem] md:py-12 lg:py-24 items-center">
      <div className="grid gap-4">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-center">
          Download Firecamp
        </h2>

        <p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 text-center dark:text-slate-200">
          Download the app to get started using the Firecamp API Platform today
          and Start building APIs 3x faster with your team
        </p>
      </div>

      <div className="grid gap-4 w-full justify-center text-slate-900 dark:text-slate-200">
        <div className="mb-2">
          <h3 className="text-xl font-medium sm:text-2xl mb-2">
            Stable Version
          </h3>

          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-400">
            Production grade application
          </p>
        </div>

        <div className="grid gap-3">
          {stableDownloadLinks.map((link) => (
            <div key={link.id} className="flex items-center gap-4">
              <Image src={link.icon} alt={link.title} width={20} height={20} />

              <Link
                className="hover:underline cursor-pointer"
                href={link.link}
                target="_blank"
              >
                <span>{link.title}</span>{" "}
                <span className="text-slate-700 dark:text-slate-500">
                  v3.2.3
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <p className="text-slate-800 dark:text-slate-400 text-center">
        By downloading and using Firecamp, I agree to the{" "}
        <Link href="/legal/privacy-policy" className="underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/legal/terms-of-service" className="underline">
          Terms
        </Link>
      </p>
    </section>
  );
}

const stableDownloadLinks = [
  {
    id: 1,
    title: "Firecamp for Windows 64",
    icon: "/microsoft.svg",
    link: "/download/app/win?arch=64",
  },
  {
    id: 2,
    title: "Firecamp for Mac x64",
    icon: "/apple.svg",
    link: "/download/app/mac?arch=x64",
  },
  {
    id: 3,
    title: "Firecamp for Mac arm64",
    icon: "/apple.svg",
    link: "/download/app/mac?arch=arm64",
  },
  {
    id: 4,
    title: "Firecamp for Ubuntu x64",
    icon: "/ubuntu.svg",
    link: "/download/app/linux?arch=x64",
  },
  {
    id: 5,
    title: "Firecamp for Ubuntu arm64",
    icon: "/ubuntu.svg",
    link: "/download/app/linux?arch=arm64",
  },
];
