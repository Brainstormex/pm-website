import { pageService } from "@/services/pageServices";
import { PageProps, TopicResponse } from "@/types/common";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
// import { Breadcrumb } from "@/components/Breadcrumb";
export default async function TopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? ''; 

  const response = await pageService.getTopicsBySlug(slug || "",host);
  const topicsData: TopicResponse = response.data;
  return (
    <div className="flex flex-col gap-10">
      <section className="max-w-7xl mx-auto py-6 lg:py-10 w-full">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">{topicsData.topic.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicsData.posts.map((post, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Link href={post.link}>
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={post.image} 
                        alt={post.title} 
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-orange">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    {post.description && (
                      <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return {
    title: "PageRenderer",
    description: "PageRenderer" + slug,
  };
}
