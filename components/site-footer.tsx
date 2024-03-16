import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {

    return (
        <footer className="bg-white dark:bg-gray-900 border-t">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">

                    <FooterList
                        name="Product"
                        links={[
                            { link: "/api-playgrounds", name: "API Playgrounds" },
                            { link: "/api-collaboration", name: "API Collaboration" },
                            { link: "/api-collection", name: "API Collection" },
                            { link: "/api-test-runner", name: "API Test Runner" },
                            { link: "/api-documentation", name: "API Documentation" },
                        ]}
                    />

                    <FooterList
                        name="Playgrounds"
                        links={[
                            { link: "/rest", name: "Rest Playground" },
                            { link: "/graphql", name: "GraphQL Playground" },
                            { link: "/websocket", name: "WebSocket Playground" },
                            { link: "/socketio", name: "SocketIO Playground" },
                        ]}
                    />

                    <FooterList
                        name="Developer"
                        links={[
                            { link: "/download", name: "Download" },
                            { link: "/docs", name: "Documentation" },
                            { link: "/blog", name: "Blog" },
                        ]}
                    />

                    <FooterList
                        name="Community"
                        links={[
                            { link: siteConfig.links.github, name: "GitHub" },
                            { link: siteConfig.links.twitter, name: "Twitter" },
                            { link: siteConfig.links.discord, name: "Discord Server" },
                            { link: siteConfig.links.ossFriends, name: "OSS Friends" },
                        ]}
                    />
                    <FooterList
                        name="Legal"
                        links={[
                            { link: "/legal/privacy-policy", name: "Privacy Policy" },
                            { link: "/legal/terms-and-conditions", name: "Terms & Conditions" },
                            { link: "/legal/cookie", name: "Cookie" },
                        ]}
                    />
                </div>
                <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 Firecamp. All Rights Reserved.</span>
                    <div className="flex mt-4 space-x-6 items-baseline sm:justify-center md:mt-0">
                        <FooterIcon
                            link={siteConfig.links.discord}
                            svg={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z" /></svg>}
                            name="Discord"
                        />
                        <FooterIcon
                            link={siteConfig.links.twitter}
                            svg={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>}
                            name="Twitter"
                        />
                        <FooterIcon
                            link={siteConfig.links.github}
                            svg={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>}
                            name="Github"
                        />
                        <a className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <ModeToggle />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const FooterLink: React.FC<any> = ({ link, name }) => {
    return (
        <li className="mb-4">
            <Link href={link} legacyBehavior passHref>
                <a href={link} className="hover:underline">{name}</a>
            </Link>
        </li>
    )
}

const FooterIcon: React.FC<any> = ({ link, svg, name }) => {
    return (
        <Link href={link} target="_blank" legacyBehavior passHref>
            <a className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                {svg}
                <span className="sr-only">{name}</span>
            </a>
        </Link >
    )
}

const FooterList: React.FC<any> = ({ name, links }) => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">{name}</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {links.map((l: any, i: number) => <FooterLink key={i} link={l.link} name={l.name} />)}
            </ul>
        </div>
    )
}