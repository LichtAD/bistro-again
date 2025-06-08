import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import MenuItem from '../Shared/MenuItem/MenuItem';

function PopularMenu() {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => item.category === 'popular')
                setMenu(popular)
            })
    }, [])

    return (
        <div>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check It Out"}></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    )
}

export default PopularMenu