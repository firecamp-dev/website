import Link from "next/link";
import { SheetClose } from "./ui/sheet";

const navPlaygroundsComponents: { title: string; href: string; description: string }[] = [
  {
    title: "GraphQL Playground",
    href: "/graphql",
    description: "Play with GraphQL operations instantly."
  },
  {
    title: "WebSocket Playground",
    href: "/websocket",
    description: "Observer realtime WS events over active connection."
  },
  {
    title: "SocketIO Playground",
    href: "/socketio",
    description: "Test your connection, listener and emitter events visually"
  }
]

export function NavPlaygrounds() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold">Playgrounds</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 dark:text-white overflow-y-scroll py-8 mx-auto">
        {navPlaygroundsComponents.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className="text-center border-2 border-zinc-600 dark:border-zinc-500 py-3 px-1 rounded-xl space-y-2"
          >
            <SheetClose>
              <h2 className="font-bold text-md md:text-lg">{component.title}</h2>
              <p className="text-xs sm:text-sm dark:text-zinc-400">{component.description}</p>
            </SheetClose>
          </Link>
        ))}
      </div>
    </>
  )
}

{/*  */ }