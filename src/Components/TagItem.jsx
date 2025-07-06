import React from 'react';

const TagItem = ({SubTitle, Title}) => {
    return (
        <div className='mx-auto text-center md:mt-24 mt-12'>
            <p className='md:text-2xl text-xl md:py-5 py-3 italic text-orange-500'>--- {SubTitle} ---</p>
            <h1 className='md:text-4xl text-2xl uppercase border-y-2 md:py-5 py-3 md:mb-10 mb-5 md:mx-96 '>{Title}</h1>
        </div>
    );
};

export default TagItem;