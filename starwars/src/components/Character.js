// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import Details from './Details';

const StyledName = styled.div`
    font-family: ${props => props.theme.fontFamily};
    background-color: ${props => props.theme.backgroundColor};
    width: ${props => props.theme.width};
    margin: ${props => props.theme.margin};
`

const Character = ({props}) => {
    const [personDetails, setPersonDetails] = useState(null)
    
    const openDetails = details => {
        setPersonDetails(details)
    }

    return(
        <StyledName>
            <h1 onClick={(evt) => openDetails(props)}> {props.name} </h1>
           {
               personDetails && <Details details={personDetails}/> 
           }
        </StyledName>
    )
}

export default Character

// onClick={(evt) => openDetails(props.name)}