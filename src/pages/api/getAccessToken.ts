import { getIronSession, SessionOptions } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import { SessionData } from '../../types/common';
// Define the session structure
// Iron-session options
export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: "website_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// Extend IronSessionData
declare module "iron-session" {
  interface IronSessionData extends SessionData { }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);
  if (!session.accessToken) {
    return res.status(200).json({ message: "No session", user: null });
  }
  // if (!session.accessToken) {
  //   return res.status(401).json({ message: "Session not found" });
  // }

  const {
    accessToken,
    subscriber_id,
    user_email,
    user_mobile,
    first_name,
    last_name,
    company_name,
    designation,
    fk_country_id,
    country_name,
    is_subscribe_news_letter,
    is_accept_terms,
    is_user_type,
    userData,
  } = session;

  const payload = {
    token: accessToken,
    subscriber_id,
    user_email,
    user_mobile,
    fk_country_id,
    first_name,
    last_name,
    company_name,
    designation,
    country_name,
    is_subscribe_news_letter,
    is_accept_terms,
    is_user_type,
    userData,
  };

  return res.status(200).json({ message: "Session fetched successfully", user: payload });
}
