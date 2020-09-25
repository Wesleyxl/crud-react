import React from 'react'

import Btn from '../../components/Btn';

export default function Welcome() {

    return(
        <>
            <h1>Welcome</h1>
            <br />

            <Btn width={150} height={40} background={"#007BFF"} name={'Ver produtos'} link={'/produtos'} />
        </>
    );

}