"use server";
import { redirect } from "next/navigation";
import { db } from "../db";
import { createToken } from "../jwt";
import { cookies } from "next/headers";
import { compare } from "bcrypt";

const prisma = db;

export async function loginForm(formData: FormData) {
    const username = formData.get("username") as string | undefined;
    const password = formData.get("password") as string | undefined;
    if(!username || !password) return redirect("/login?error=Username and password are required fields");
    const user = await prisma.user.findUnique({
        where:{
            username: username
        }
    })
    if(!user || user === null) return redirect("/login?error=Invalid username or password");

    if(!await compare(password, user.password)) return redirect("/login?error=Invalid username or password")

    const token = await createToken({uid: user.id, username: user.username});
    const cookeStore = await cookies();
    cookeStore.set("token", token, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        path: "/",
        sameSite: "lax"
    })
    redirect("/dashboard");
}