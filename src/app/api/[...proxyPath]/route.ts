import TMDB from "@/utils/api";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { proxyPath: string[] } }) {
  const path = params.proxyPath.join("/");
  const searchParams = new URL(request.url).searchParams.toString();

  try {
    const get = await TMDB.get(`${path}?${searchParams}`);
    return NextResponse.json(get.data);
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.error();
  }
}
