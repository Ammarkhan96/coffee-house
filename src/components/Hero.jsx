import React from 'react'
import { MdCoffee } from 'react-icons/md'
import { Link } from 'react-scroll'
import {SiBuymeacoffee} from 'react-icons/si'
import { GiCoffeeMug } from 'react-icons/gi'

function Hero() {
  return (
    <section id='home'>
        <div className='hero'>
            <h1>Coffee House</h1>
            <p>HAVE A COFFEE AND CREATE GOOD MEMORIES</p>
            <Link to='menu' smooth={true}>
                <div className='btn hero-btn'>Our Menu</div>
            </Link>
        </div>

        <div className='hero-cards'>
            <div className='card'>
                <MdCoffee size={100} />
                <span>Great Americano</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <Link to='menu' smooth={true}>See Menu</Link>
            </div>

            <div className='card'>
                <SiBuymeacoffee size={90} />
                <span style={{marginTop: '0.5rem'}}>Delicious Latte</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <Link to='menu' smooth={true}>See Menu</Link>
            </div>

            <div className='card'>
                <GiCoffeeMug size={100} />
                <span>Mest Mocha</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <Link to='menu' smooth={true}>See Menu</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero