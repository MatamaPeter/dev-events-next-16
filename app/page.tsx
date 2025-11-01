import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import { events } from '@/lib/constants'

const Page = () => {
  return (
    <section>
      <h1 className='text-center capitalize'>The Hub for every Dev<br />Event You can&apos;t Miss</h1>
      <p className='text-center mt-5 capitalize'>Hackathons, Meetups and conferences, all in One place</p>
      
      <ExploreBtn />

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {events.map((event) => (
            <li key={event.title}><EventCard {...event} /></li>
          ))}
        </ul>
      </div>
    </section>)
  
}

export default Page