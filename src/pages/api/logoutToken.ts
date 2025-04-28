import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

const sessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: "website_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getIronSession(req, res, sessionOptions);

  if (!(session as any).accessToken) {
    return res.status(400).json({ message: "No active session found" });
  }

  await session.destroy();

  // You can optionally skip this if `iron-session` handles it properly in your environment.
  res.setHeader(
    "Set-Cookie",
    `website_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict; ${
      process.env.NODE_ENV === "production" ? "Secure;" : ""
    }`
  );

  return res.status(200).json({ message: "Logged out successfully" });
}
