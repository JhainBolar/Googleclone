import React from 'react'
import styles from '../components/styles/Search.module.css';
import { IoIosSearch } from 'react-icons/Io';
import { BsMicFill } from 'react-icons/Bs';

function Search() {
    return (
        <div>
            <div className={styles.search}>
            <div className={styles.search__input}>
             <IoIosSearch size={28} className={styles.searchicon} />
            <input />
            <BsMicFill size={25} />
            </div>
            <div className={styles.search__buttons}>
                 <button>Google Search</button> 
                <button variant='outlined' >I'm Feeling Lucky</button>
            </div>

            
        </div>
        </div>
    )
}

export default Search;

