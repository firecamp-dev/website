import Link from "next/link";
import { ListItem } from "@mui/material";


const navProductsComponents: { title: string; href: string; description: string }[] = [
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


export function NavProducts() {
  return (
    <>
      <h1 className="text-3xl dark:text-black sm:text-4xl font-bold">Products</h1>

      <div className="text-center dark:text-black py-8">
        {navProductsComponents.map((component) => (
          <ListItem key={component.href}>
            <Link
              href={component.href}
              className="w-full text-center border-2 border-zinc-600 dark:border-zinc-500 py-3 px-1 rounded-xl space-y-2"
            >
              <h2 className="font-bold text-md md:text-lg">{component.title}</h2>
              <p className="text-xs sm:text-sm dark:text-zinc-500">{component.description}</p>
            </Link>
          </ListItem>
        ))}
      </div>
    </>
  )
}