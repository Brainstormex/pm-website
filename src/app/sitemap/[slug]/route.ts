import { NextRequest } from 'next/server';
import axios from 'axios';
// import { Params } from 'next/dist/server/request/params';

export const runtime = 'nodejs'; // Use Node.js runtime for server-side environment.

interface PageProps {
  params:  Promise<{
      catslug?: string;
      slug?: string;
  }>
}

export async function GET(
  req: NextRequest,
  { params }: PageProps
) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  try {
    // Base64 encode username:password
    const encodedCredentials = Buffer.from(
      `${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`
    ).toString('base64'); // Use Buffer for base64 encoding

    console.log(`${process.env.NEXT_PUBLIC_CMS_BASE_URL}/${slug}`);

    // Fetch the sitemap XML
    const axiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/${slug}`,
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
      `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}`
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
