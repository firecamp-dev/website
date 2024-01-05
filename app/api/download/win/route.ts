import { NextRequest } from "next/server";
import { winLinks, parseYaml, digitalOceanLink } from "../common";

export async function GET(request: NextRequest) {
  let arch = "64";
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("arch");
  if (query) {
    arch = query;
  }

  const link = winLinks[arch];

  if (!link) {
    return new Response("Not found", { status: 404 });
  }

  const res = await fetch(link);

  if (!res.ok) {
    return new Response("Not found", { status: 404 });
  }

  const data = await res.text();

  const parsed = parseYaml(data);

  return new Response(
    JSON.stringify({
      link: `${digitalOceanLink}/win/${parsed.path}`,
    }),
    {
      status: 200,
    }
  );
}
