"use client"

import { Content, Overlay, Root, Trigger, Close } from "@radix-ui/react-dialog"

import { Icons } from "@/components/icons"
import { NavPlaygrounds } from "./nav-playgrounds"
import { NavProducts } from "./nav-products"
import Link from "next/link"
import { useState } from "react"

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



export default function HamburgerMenu() {
    return (
        <Root>
            <Trigger asChild>
                <Icons.hamburger className="block lg:hidden" />
            </Trigger>

            <Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Content className={`data-[state=open]:animate-contentShow fixed top-[0%] right-[0%]  rounded-[6px] w-[85vw] max-w-[450px] bg-white p-[25px] shadow-black shadow-[0px_0px_90px] focus:outline-none h-[100vh] overflow-scroll transition-all duration-1000`}>
                <>
                    <Close>
                        <Icons.close className="dark:bg-black" />
                    </Close>
                </>

                <div className="overflow-y-scroll py-10 px-2">
                    <NavPlaygrounds />

                    <hr className="my-5 h-2 bg-zinc-500" />

                    <NavProducts />

                    <hr className="my-5 h-2 bg-zinc-500" />

                    <div className="flex flex-col gap-5 sm:gap-7">
                        {links.map((link) => (
                            <Close className="text-left" key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-[1.75rem] sm:text-4xl font-bold dark:text-black"
                                >
                                    {link.title}
                                </Link>
                            </Close>
                        ))}
                    </div>
                </div>
            </Content>
        </Root>
    )
} 