// import { NextRequest } from 'next/server';
import axios from 'axios';

export const runtime = 'nodejs'; // Use Node.js runtime for server-side environment.

export async function GET() {
  try {
    // Base64 encode username:password
    const encodedCredentials = btoa(
      `${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`
    );

    console.log(`${process.env.NEXT_PUBLIC_CMS_BASE_URL}/sitemap.xml`);

    // Fetch the sitemap XML
    const axiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/sitemap.xml`,
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );

    // Get the XML data as text
    let xmlData = axiosResponse.data;

    // Replace URLs
    xmlData = xmlData.replaceAll(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}`,
      `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/sitemap`
    );

    // Remove the xml-stylesheet line (if it exists)
    xmlData = xmlData.replace(/<\?xml-stylesheet[^>]*\?>\n?/g, '');

    // Return the updated XML as the response
    return new Response(xmlData, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error fetching or processing sitemap:', error);

    return new Response('Failed to fetch or process sitemap.', { status: 500 });
  }
}
