import React from 'react';
import styles from './styles/Home.module.css';
import  Link  from 'next/link';
import { GrApps } from "react-icons/gr";
import { BsPeopleCircle } from 'react-icons/bs';
import Search from '../components/Search';
function Home() {
    return (
    
             <div className={styles.home}>
        <div className={styles.home__header}>
        <div className={styles.home__headerLeft}>
             <Link href='/about'>About</Link>
            <Link href='/store'>Store</Link>
        </div>
        <div className={styles.home__headerRight}>
        <Link href='/gmail'>Gmail</Link>
          <Link href='/images'>Images</Link> 
          <div className={styles.homeIcon1}>
          <GrApps />
          </div>
          <div className={styles.homeIcon2} size={25}>
         <BsPeopleCircle className={styles.BsPeopleCircle} size={25} /> 
          </div>
         
        </div>
        </div>
        <div className={styles.home__body}>
            {/* <img
             src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt='Opor' />  */}
        <div className='home__body__inputcontainer'>
       <Search /> 
        </div>
        
        </div>


        </div>
    
    )
}

export default Home
