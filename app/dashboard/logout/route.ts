import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const res = NextResponse.redirect(new URL("/", req.url), 302);
    res.cookies.delete("token");
    return res;
}