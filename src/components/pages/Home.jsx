import React, { useState } from 'react';

import Navbar from '../layouts/Navbar';
import JobItem from '../layouts/JobItem';

import { jobList } from '../../data';

export default function Home() {
    const [query, setQuery] = useState('');
    const [order, setOrder] = useState('Latest');
    console.log(order)
    if (order == 'Latest') {
        jobList.sort((a, b) => {
            return b.posted - a.posted;
        })
    } else {
        jobList.sort((a, b) => {
            return a.posted - b.posted;
        })
    }

    const jobs = jobList.map((job) => {
        if (job.name.toLowerCase().includes(query.toLowerCase()) || job.company.toLowerCase().includes(query.toLowerCase()) || job.tag.toLowerCase().includes(query.toLowerCase())) {
            return (
                <JobItem job={job} />
            )
        }
    })
    let checkNoJob = false;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i] != undefined) {
            checkNoJob = true;
            break;
        }
    }
    return (
        <>
            <Navbar query={query} setQuery={setQuery} order={order} setOrder={setOrder} />

            <section className='flex flex-col justify-center items-center'>
                {checkNoJob ?
                    jobs
                    :
                    <NoJobFound />
                }
            </section>

        </>
    )
}
const NoJobFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-2">No Job Found</h1>
            <p className="text-gray-600">Sorry, we couldn't find any job matching your search criteria.</p>
        </div>
    );
};