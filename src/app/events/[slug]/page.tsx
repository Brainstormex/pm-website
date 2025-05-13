import { div } from "framer-motion/client";
import React from "react";
import EventDetail from "./EventDetail";
import { EventDetailHeader } from "./EventDetailHeader";
import EventDetailServer from "./EventDetailServer";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params promise
  const { slug } = await params;
  return (
    <div>
      <EventDetailServer slug={slug} />
    </div>
  );
}
