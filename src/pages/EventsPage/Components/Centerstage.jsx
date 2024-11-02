import React from 'react'
import CardSection from './CardSection'
import { Link } from 'react-router-dom'
import CardDemo1 from './ui/CardDemo1'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const EventsSection = () => {
    return (
        <div className='flex flex-col items-center pb-10 bg-slate-900'>
 
            <div className='h-fit p-4 mt-2 w-[92vw] rounded-lg border-2 border-orange-200 flex flex-row justify-around '>
                <Link to='/events'><div className='text-xl text-orange-200'>Centerstage Events </div> {/* Active */}</Link>
                <Link to='/FunNcultural'><div className='text-xl text-orange-200'>Fun and Cultural</div></Link>
                <div className='text-xl text-orange-200'>Workshop and Guest Talks</div>
            </div>

            <div className=' w-[90vw] -ml-8 flex flex-col items-start justify-evenly gap-10 text-orange-200'>
                <div>
                <CardSection title="🧑‍💻 CODING" />
                <CardSection title="🤖 ROBOTICS" />
                <CardSection title="🙋‍♂️ TECH-Qs" />
                <CardSection title="💻 MINI HACKATHONS" />
                <CardSection title="⚔️ CODE COMBAT" />
                </div>
            </div>

            <CardDemo1 />


        </div>


    )
}

export default EventsSection