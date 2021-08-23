import React, { useState } from 'react'
import styles from '../components/styles/Search.module.css';
 import { IoIosSearch } from 'react-icons/io';
 import { BsMicFill } from 'react-icons/bs';

function Search() {
     const [input, setInput] = useState(" ")
    const search = e => {
        e.preventDefault();
    }


    return (
        <div>
            <div className={styles.search}>
            <div className={styles.search__input}>
              <IoIosSearch size={28} className={styles.searchicon} />
            <input value={input} onChange={e => setInput(e.target.value)} />
            <BsMicFill size={25} />
            </div>
            <div className={styles.search__buttons}>
                 <button onClick={search} >Google Search</button> 
                 <button>I'm Feeeling Lucky</button> 
            </div>

            
        </div>
        </div>
    )

    }
export default Search;

