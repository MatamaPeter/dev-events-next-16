import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { IEvent } from '@/database';
import { events } from '@/lib/constants'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
  if (!BASE_URL) {
    console.error('NEXT_PUBLIC_BASE_URL is not defined');
    return <div>Configuration error</div>;
  }

  let events = [];
  try {
    const response = await fetch(`${BASE_URL}/api/events`, {
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }
    
    const data = await response.json();
    events = data.events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return <div>Failed to load events</div>;
  }

  return (
    <section>
      <h1 className='text-center capitalize'>The Hub for every Dev<br />Event You can&apos;t Miss</h1>
      <p className='text-center mt-5 capitalize'>Hackathons, Meetups and conferences, all in One place</p>
      
      <ExploreBtn />

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {events.map((event:IEvent) => (
            <li key={event.title} className='list-none'><EventCard {...event} /></li>
          ))}
        </ul>
      </div>
    </section>)
  
}

export default Page