"use server";

import { sign } from "jsonwebtoken";
import { db } from "../db";

export async function createApiKey(username: string): Promise<string | undefined> {
    const user = await db.user.findUnique({
        where: {
            username: username
        }
    });
    if(!user) return;
    const apiKey = sign({uid: user.id, username: user.username}, user.apiSecret);
    return apiKey;
}