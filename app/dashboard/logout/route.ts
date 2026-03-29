import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    return NextResponse.redirect("/", 302);
}