import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(3, "120 s"),
});

export const config = {
  matcher: "/api/:path*",
};

export default async function middleware(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  if (success) {
    return NextResponse.next();
  } else {
    const response = new NextResponse("Too Many Requests", { status: 429 });

    response.headers.set("RateLimit-Limit", limit.toString());
    response.headers.set("RateLimit-Remaining", remaining.toString());
    response.headers.set("RateLimit-Reset", reset.toString());

    return response;
  }
}
