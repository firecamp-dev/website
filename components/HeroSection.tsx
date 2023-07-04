import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function HeroFSection() {
    return (
        <section className="space-y-10 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-44">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                <Link
                    href={siteConfig.links.twitter}
                    className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                    target="_blank"
                >
                    Follow along on Twitter
                </Link>
                <h1 className="font-heading text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-slate-500 to-slate-900 bg-clip-text text-transparent">
                    Open Source Postman Alternative
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Firecamp helps to build APIs 3x faster with great developer experience
                </p>
                <div className="space-x-4">
                    <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))} >
                        Get Started
                    </Link>
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                    >
                        GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
};