import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
    return (
        <section id="cta" className="container py-8 md:py-12 lg:pb-40">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Pitch Your Tent at the API Campsite Today!
                </h2>
                <div className="space-x-4">
                    <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                        Launch Firecamp
                    </Link>
                </div>
            </div>
        </section>
    );
};