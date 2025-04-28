import { getIronSession, SessionOptions } from 'iron-session';
import { NextApiRequest, NextApiResponse } from 'next';
import { SessionData } from '../../types/common';

// Define the shape of your session data


// Extend IronSession interface
declare module 'iron-session' {
  interface IronSessionData extends SessionData {}
}

// Session config
const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: 'website_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    token,
    subscriber_id,
    email,
    mobile,
    fname,
    lname,
    company_name,
    designation,
    fk_country_id,
    m_countries_relation,
    is_subscribe_news_letter,
    is_accept_terms,
    is_user_type,
  } = req.body;

  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  // Save data to session
  session.accessToken = token;
  session.subscriber_id = subscriber_id;
  session.user_email = email;
  session.user_mobile = mobile;
  session.first_name = fname;
  session.last_name = lname;
  session.company_name = company_name;
  session.designation = designation;
  session.fk_country_id = fk_country_id;
  session.country_name = m_countries_relation?.name;
  session.is_subscribe_news_letter = is_subscribe_news_letter;
  session.is_accept_terms = is_accept_terms;
  session.is_user_type = is_user_type;
  session.userData = req.body;

  await session.save();

  return res.status(200).json({ message: 'AccessToken set successfully!', token });
}
