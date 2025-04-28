import { PageProps} from "@/types/common";

import AuthorArticles from "./AuthorArticles";



export default async function AuthorPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return (
    <AuthorArticles slug={slug || ""} type="author" />
  );
}
