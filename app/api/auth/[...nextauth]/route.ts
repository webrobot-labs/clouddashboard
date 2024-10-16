import { authOptions } from "../../../../auth";
import NextAuth from "next-auth";

// Esporta i gestori GET e POST
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
