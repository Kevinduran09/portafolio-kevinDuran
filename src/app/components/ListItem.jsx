import React from 'react';

export const ListItem = ({ title, icon, items }) => {
    return (
        <>
            <span className='flex items-center gap-2 mt-6 text-gray-300 '>
                {icon}
                {title}
            </span>
            <ul className='flex flex-row flex-wrap gap-5 py-4'>
                {items.map((item, index) => (
                    <li key={item} className='flex items-center gap-2 px-3 py-1.5  bg-gray-800 rounded-full'>
                        <span className='text-sm font-medium text-gray-300'>{item}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};
