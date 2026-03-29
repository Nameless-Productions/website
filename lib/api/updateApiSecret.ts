"use server";

import { randomUUID } from "crypto";
import { db } from "../db";

export async function updateApiSecret(username: string) {
    const user = await db.user.findUnique({
        where: {
            username: username
        }
    });
    if(!user) return;
    await db.user.update({
        where: {
            username: username
        },
        data: {
            apiSecret: randomUUID()
        }
    })
}