import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/card'
import Footer from './Footer'
import Carousel from '../components/Carousel'
export default function Home() {
    return (
        <div>
            <div> <Navbar /> </div>
            <div>
                <Carousel/>
            </div>
            <div className='m-3'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div><Footer /></div>
        </div>
    )
}
