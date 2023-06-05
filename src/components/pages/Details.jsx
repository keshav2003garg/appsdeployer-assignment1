import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { useParams } from 'react-router-dom';

import { jobDetail } from '../../data';

export default function Details() {
    const { id } = useParams();
    const job = jobDetail.find((job) => job.id == id);
    const { name, company, location, posted, jobType, companySize, industry, salary, duration, description, responsibilities, requirements, benefits } = job;
    const date = new Date(posted);
    TimeAgo.addDefaultLocale(en)
    let timeAgo = new TimeAgo('en-US');
    timeAgo = timeAgo.format(date);
    return (
        <section className='my-5 mx-20 p-10 border drop-shadow-2xl bg-[#FEFEFE] rounded-3xl'>
            <div className=''>
                <h3 className='text-lg text-[#0a66c2] font-medium cursor-pointer hover:underline'>{name}</h3>
                <h4 className='inline font-medium'>{company}</h4>
                <h5 className='inline italic'> · {location} </h5>
                <time className='inline text-[#666666]'> · {timeAgo}</time>

                <p>{jobType}</p>
                <p>{companySize} · {industry}</p>
            </div>

            <br />

            <h2 className='text-center font-bold text-2xl'>About This Job</h2>
            <h3 className='inline font-serif'>Description:</h3>
            <p>{description}</p>

            <br />

            <h3 className='inline font-serif'>Salary:</h3>
            <p>{salary}</p>

            <br />

            <h3 className='inline font-serif'>Duration:</h3>
            <p>{duration}</p>

            <br />

            <h3 className='inline font-serif'>Responsibilities:</h3>
            <ul className='list-disc list-p'>
                {responsibilities.map((responsibility, index) => (
                    <li id={index.toString()}>{responsibility}</li>
                ))}
            </ul>

            <br />

            <h3 className='inline font-serif'>Requirements:</h3>
            <ul className='list-disc list-p'>
                {requirements.map((requirement, index) => (
                    <li id={index.toString()}>{requirement}</li>
                ))}
            </ul>

            <br />

            <h2 className='inline font-serif'>What We Offer</h2>
            <ul className='list-disc list-p'>
                {benefits.map((benefit, index) => (
                    <li id={index.toString()}>{benefit}</li>
                ))}
            </ul>

        </section>
    )
}
