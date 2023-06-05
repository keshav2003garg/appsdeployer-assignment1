import React from 'react';

export default function Navbar({ query, setQuery, order, setOrder }) {
    return (
        <nav className='flex-between p-4'>
            <div>
                <select className='p-1 px-2 border rounded-xl' value={order} onChange={(e) => { setOrder(e.target.value) }}>
                    <option value='Latest'>Latest</option>
                    <option value='Oldest'>Oldest</option>
                </select>
            </div>
            <div className='flex-between'>
                <input type='text' placeholder='Search' className='mx-2 p-1 px-3 border rounded-xl' value={query} onChange={(e) => { setQuery(e.target.value) }} />
                <button className='p-1 px-2 rounded-xl bg-[#D22B2B] text-white'>Search</button>
            </div>
        </nav>
    )
}
