import { pageService } from "@/services/pageServices"
import EventDetail from "./EventDetail"
import { EventDetailHeader } from "./EventDetailHeader"

export default async function EventDetailServer({ slug }: { slug: string }) {
  try {
    const eventResponse = await pageService.getEventBySlug(slug)
    
    if (!eventResponse.success) {
      throw new Error('Failed to fetch event data')
    }

    console.log("EventDetailServer - eventResponse.data:", eventResponse.data);
    console.log("EventDetailServer - is_archived:", eventResponse.data.is_archived);

    // Fetch events based on whether the current event is archived
    let eventsResponse;
    if (eventResponse.data.is_archived) {
      eventsResponse = await pageService.getEvents(true)
    } else {
      eventsResponse = await pageService.getEvents(false)
    }

    if (!eventsResponse.success) {
      throw new Error('Failed to fetch events list')
    }

    return (
      <>
        <EventDetailHeader archived={eventResponse.data.is_archived} />
        <EventDetail 
          event={eventResponse.data} 
          events={eventsResponse.data.data} 
          slug={slug} 
          archived={eventResponse.data.is_archived}
        />
      </>
    )
  } catch (error) {
    console.error('Error loading event:', error)
    return (
      <div className="text-red-500 text-center py-8">
        Failed to load event. Please try again later.
      </div>
    )
  }
}