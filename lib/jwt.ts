"use server";

import jwt from "jsonwebtoken";

const secret = process.env.SECRET || "im missing";

export async function createToken(payload: {uid: number, username: string}){
    return jwt.sign(payload, secret, {expiresIn: "7d"});
}

export async function decodeJwt(jwtToken: string){
    return jwt.decode(jwtToken) as {uid?: number, username?: string};
}

export async function verifyToken(jwtToken: string): Promise<{uid?: number, username?: string} | undefined>{
    try{
        return jwt.verify(jwtToken, secret) as {uid?: number, username?: string};
    }
    catch{
        return;
    }
}