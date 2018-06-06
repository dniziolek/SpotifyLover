import React from 'react';
import styled from 'styled-components';
import img from '../img/background.jpg';

const ImgWrapper = styled.div`
    position: fixed; 
    top: -25%; 
    left: -50%; 
    width: 200%; 
    height: 100%;
    opacity: 0.4;
    z-index: -10;
`;

const Image = styled.img`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    margin: auto; 
    min-width: 50%;
    min-height: 50%;
`;

export class ImgBackground extends React.Component {
    render() {
        return (
            <ImgWrapper>
                <Image src={img}/>
            </ImgWrapper>
        )
    }
}