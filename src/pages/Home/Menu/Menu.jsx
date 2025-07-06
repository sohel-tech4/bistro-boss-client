import React, { useEffect, useState } from 'react';
import TagItem from '../../../Components/TagItem';
import MenuItem from '../../shared/MenuItem/MenuItem';

const Menu = () => {

    const [Menu, SetMenu] = useState([]) 
    useEffect(()=>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const PopularItem = data.filter(item => item.category === "popular")
            SetMenu(PopularItem)
        })
    }, [])

    return (
        <section>
            <TagItem
                SubTitle={"Check it out"}
                Title={"From Our Menu"}
            >

            </TagItem>
            <div className='md:grid grid-cols-2 p-5 gap-5'>
                {
                    Menu.map(Item => <MenuItem 
                    key={Item._id}
                    Item={Item}
                    ></MenuItem>)
                }
            </div>
            
            
        </section>
    );
};

export default Menu;