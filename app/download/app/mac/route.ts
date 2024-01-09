import { NextRequest } from "next/server";
import { digitalOceanLink, parseYaml } from "../common";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  let arch = "x64";
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("arch");
  if (query) {
    arch = query;
  }

  const res = await fetch(`${digitalOceanLink}/mac/latest-mac.yml`);
  if (!res.ok) return new Response("Not found", { status: 404 });
  const data = await res.text();
  const parsed = parseYaml(data);

  return redirect(`${digitalOceanLink}/mac/Firecamp-${parsed.version}.${arch}.dmg`);
}
