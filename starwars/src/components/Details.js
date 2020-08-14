import React, { useState } from 'react';
import styled from 'styled-components';

const StyledName = styled.div`
    font-family: ${props => props.theme.fontFamily};
`

const Details = ({details}) => {
    return(
        <StyledName>
            <h3> Gender: {details.gender} </h3>
            <h3> Hair Color: {details.hair_color} </h3>
            <h3> Eye Color: {details.eye_color} </h3>
        </StyledName>
            
    )
}


export default Details