import { pageService } from "@/services/pageServices";
import { PageProps, Topic } from "@/types/common";
import { headers } from "next/headers";
// import { Breadcrumb } from "@/components/Breadcrumb";
export default async function TopicPage() {
 
  const host = (await headers()).get('x-forwarded-host') 
  ?? (await headers()).get('host') 
  ?? ''; 

  const response = await pageService.getTopics(host);
  const topicsData:Topic[] = response.data;
  return (
    <div className="flex flex-col gap-10">
      <section className="max-w-7xl mx-auto py-6 lg:py-10 w-full">
        {/* <Breadcrumb data={breadcrumbData} /> */}
        <div className="min-h-screen p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Topics</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {topicsData.map((topic, index) => {
              // Calculate font size based on value (higher value = larger font)
              const fontSize = Math.max(14, Math.min(24, 14 + (topic.value / 20)));
              
              return (
                <a
                  href={topic.href}
                  key={index}
                  className="inline-block px-4 py-2 bg-lightOrange text-orange hover:bg-orange hover:text-white transition-colors duration-300 rounded-md m-1"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {topic.text}
                </a>
              );
            })}
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
