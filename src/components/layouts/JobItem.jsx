import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { useNavigate } from 'react-router-dom';

export default function JobItem({ job }) {
    const { id, name, company, tag, description, salary, duration, jobType, location, posted } = job;
    const navigate = useNavigate();
    const date = new Date(posted);
    TimeAgo.addDefaultLocale(en)
    let timeAgo = new TimeAgo('en-US');
    timeAgo = timeAgo.format(date);
    return (
        <div className='m-3 p-4 w-[60vw] drop-shadow-lg bg-[#FEFEFE] hover:drop-shadow-2xl rounded-xl cursor-pointer' onClick={() => { navigate(`/job/${id}`) }}>
            <div className='flex-between'>
                <div>
                    <h3 className='text-lg text-[#0a66c2] font-medium hover:underline'>{name}</h3>
                    <h4 className='inline font-medium'>{company}</h4>
                </div>
                <p className='p-1 px-2 bg-gray-300 top-4 right-4 rounded-xl text-center'>{tag}</p>
            </div>
            <h2><p className='inline font-serif'>Posted:</p> {timeAgo}</h2>
            <h2><p className='inline font-serif'>Description:</p> {description}</h2>
            <h2><p className='inline font-serif'>Salary:</p> {salary}</h2>
            <h2><p className='inline font-serif'>Duration:</p> {duration}</h2>
            <h2><p className='inline font-serif'>Job type:</p> {jobType}</h2>
            <h2><p className='inline font-serif'>Location:</p> {location}</h2>
        </div>
    )
}
