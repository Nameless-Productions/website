"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse, ProxyConfig } from "next/server";
import { verifyToken } from "./lib/jwt";

export default async function Proxy(req: NextRequest) {
    const cookeStore = await cookies();
    let token = cookeStore.get("token")?.value;
    if(!token) return NextResponse.redirect(new URL("/login", req.url), 302);

    const verify = await verifyToken(token);
    if(!verify) return NextResponse.redirect(new URL("/login", req.url), 302);
    const response = NextResponse.next();
    response.headers.set("x-username", verify.username!);
    return response;
}

export const config: ProxyConfig = {
    matcher: ["/dashboard/:path*"]
}