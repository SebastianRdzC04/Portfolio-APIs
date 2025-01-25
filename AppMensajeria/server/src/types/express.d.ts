import * as express from "express";

declare global {
    namespace Express{
        interface User {
            id?: string;
            role?: '1'|'2'|'3';
        }
        interface Request {
            user?: User
        }
    }
}