
import { getIronSession, SessionOptions } from "iron-session";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SessionData } from "../../types/common";

declare module 'iron-session' {
    interface IronSessionData extends SessionData { }
}

const sessionOptions: SessionOptions = {
    password: process.env.SESSION_PASSWORD as string,
    cookieName: 'website_session',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
};

export function authMiddleware(
    handler: (req: NextRequest, res: NextResponse) => any
) {
    return async (req: NextRequest, res: NextResponse) => {
        const session = await getIronSession<SessionData>(req, res, sessionOptions);

        if (!session?.accessToken) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        Object.assign(req, { session });

        return handler(req, res);
    };
}
