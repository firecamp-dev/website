"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "API Collection",
        href: "/api-collection",
        description:
            "Manage collection as single source of truth for team collaboration",
    },
    {
        title: "API Playgrounds",
        href: "/api-playgrounds",
        description: "Get feature reach API playgrounds for your API testing need",
    },
    {
        title: "API Collaboration",
        href: "/api-collaboration",
        description:
            "Use organization/workspaces to work collaboratively within team",
    },
    {
        title: "API Test Runner",
        href: "/api-test-runner",
        description: "Run the API Collection in runner visually",
    },
    {
        title: "CLI & CI/CD",
        href: "/cli",
        description: "Run the collection in terminal or run in CI/CD pipeline",
    },
    {
        title: "API Documentation",
        href: "/api-documentation",
        description: "Publish a beautiful API documentation for team or community",
    },
]

export function NavMenu() {
    return (
        <>
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                {/* <Icons.logo /> */}
                <Image src="/logo/fc-full.svg" alt="Firecamp Logo" width={180} height={50} />
                <span className="hidden font-bold sm:inline-block">
                    {/* {siteConfig.name} */}
                    {/* Firecamp */}
                </span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-colors hover:text-foreground/80 sm:text-sm">Playgrounds</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/rest"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Rest Playground
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Work with Rest APIs effortlessly
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/graphql" title="GraphQL Playground">
                                    Play with GraphQL operations instantly.
                                </ListItem>
                                <ListItem href="/websocket" title="WebSocket Playground">
                                    Observer realtime WS events over active connection.
                                </ListItem>
                                <ListItem href="/socketio" title="SocketIO Playground">
                                    Test your connection, listener and emitter events visually
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger >Product</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "text-foreground/60" })}>
                                Documentation
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "text-foreground/60" })}>
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/pricing" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "text-foreground/60" })}>
                                Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink active={false} asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
