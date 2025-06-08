import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import PopularMenu from './PopularMenu/PopularMenu'

function Home() {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    )
}

export default Home