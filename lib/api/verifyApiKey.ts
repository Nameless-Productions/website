"use server";

import { decode, verify } from "jsonwebtoken";
import { db } from "../db";

export async function verifyApiKey(key: string): Promise<{uid: number, username: string} | undefined> {
    const decoded = decode(key) as {uid?: number, username?: string} | null;
    if(!decode || !decoded?.uid || !decoded.username) return;
    const user = await db.user.findUnique({
        where: {
            username: decoded.username,
            id: decoded.uid
        }
    });
    if(!user) return;
    const apiSecret = user.apiSecret;
    const verifyToken = verify(key, apiSecret) as {uid: number, username: string};
    if(!verifyToken) return;
    return verifyToken;
}