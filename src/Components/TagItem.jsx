import React from 'react';

const TagItem = ({SubTitle, Title}) => {
    return (
        <div className='mx-auto text-center'>
            <p className='text-2xl py-5 italic text-orange-500'>--- {SubTitle} ---</p>
            <h1 className='text-4xl uppercase border-y-2 py-5 mb-10 mx-96'>{Title}</h1>
        </div>
    );
};

export default TagItem;