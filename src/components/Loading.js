import React from 'react';
import Spinner from './spin_wheel.gif'

export default function Loading(){
    return(
            <img src={Spinner} alt='Loading Api'></img>
    )
}