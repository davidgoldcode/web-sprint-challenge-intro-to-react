// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

const styledName = styled.div`
    font-family: ${props => props.fontFamily};
`

const Character = ({name}) => {
    
    return(
        <div>
            <h1> {name} </h1>
        </div>
    )
}


export default Character