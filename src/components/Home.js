import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div className='home'>
            <Link to='/nasaphoto' className='home-link'>See into the stars!</Link>
        </div>
    )
}