import React from 'react';

const MenuItem = ({Item}) => {
    const {name, recipe, image, price} = Item
    return (
        <div className='md:flex items-center my-10 justify-between'>
            <img style={{borderRadius: "0 200px 200px 200px"}} className='w-52 pr-5 md:mb-0 mb-3' src={image} alt="" />
            <div>
                <h1 className='uppercase md:text-2xl text-xl'>{name} ---------</h1>
                <h1 className='text-lg'>{recipe}</h1>
            </div>
            <p className='text-orange-500 text-2xl'>${price}</p>
        </div>
    );
};

export default MenuItem;