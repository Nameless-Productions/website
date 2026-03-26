"use server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";

const prisma = new PrismaClient();

export async function createUser(username: string, email: string, password: string) {
    if(await prisma.user.findUnique({ where: { username } }) === null) return;

    const passwordHash = await bcrypt.hash(password, 10);
    
    await prisma.user.create({data: {
        username: username,
        email: email,
        password: passwordHash,
        apiSecret: randomUUID()
    }})
}

export async function createUserForm(formData: FormData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    if(!username || !email || !password) return redirect("/register");
    createUser(username as string, email as string, password as string);
}