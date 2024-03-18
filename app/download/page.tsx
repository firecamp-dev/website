import Link from "next/link";
import { Seo } from "@/config/seo";
import Image from "next/image";
import { useMemo } from "react";

export const metadata = {
  title: Seo.download.title,
  description: Seo.download.description,
};

const DownloadLink = ({ link }: any) => (
  <Link
    className="hover:underline cursor-pointer no-underline font-bold"
    href={link.link}
    target="_blank"
    key={link.id} // Moved key here for correct usage
  >
    <div className="flex items-center gap-4 border p-4 border-emerald-500">
      <Image src={link.icon} alt={link.title} width={20} height={20} priority />
      <span>{link.title}</span>
    </div>
  </Link>
);

export default function DownloadPage() {
  const stableDownloadLinks = useMemo(() => [
    {
      id: 2,
      title: "Firecamp for Mac (Intel)",
      icon: "/apple.svg",
      link: "https://fcamp.co/mac",
    },
    {
      id: 3,
      title: "Firecamp for Mac (M1,M2,M3)",
      icon: "/apple.svg",
      link: "https://fcamp.co/mac-silicon",
    },
    {
      id: 1,
      title: "Firecamp for Windows 64",
      icon: "/microsoft.svg",
      link: "https://fcamp.co/win-x64",
    },
    {
      id: 4,
      title: "Firecamp for Ubuntu AppImage",
      icon: "/ubuntu.svg",
      link: "https://fcamp.co/linux-appImage",
    },
  ], []);

  return (
    <section className="container flex flex-col gap-10 py-12 !pb-44 md:max-w-[64rem] md:py-12 lg:py-24 items-center">
      <div className="grid gap-4">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-center">
          Firecamp Desktop Application
        </h2>
        <p className="mx-auto max-w-[42rem] leading-normal sm:text-xl sm:leading-8 text-center dark:text-slate-200">
          Download the app to get started using the Firecamp API Platform today
          and Start building APIs 3x faster with your team
        </p>
      </div>
      <div className="grid gap-4 w-full justify-center text-slate-900 dark:text-slate-200">
        <div className="mb-2">
          <h3 className="text-xl font-medium sm:text-2xl mb-2">
            Latest Versions
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {stableDownloadLinks.map((link) => (
            <DownloadLink link={link} />
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
