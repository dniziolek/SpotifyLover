import React from 'react';
import styled from 'styled-components';
import img from '../../img/loginBackground.jpg'
import {LoginButton} from "../buttons/loginbutton";

const ImgWrapper = styled.div`
    display: block;
    position: fixed; 
    top: -50%; 
    left: -50%; 
    width: 200%; 
    height: 200%;
    opacity: 0.7;
    z-index: -10;
`;

const Img = styled.img`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    margin: auto; 
    min-width: 50%;
    min-height: 50%;
`;

export class LoginPage extends React.Component {
    render() {
        return (
            <ImgWrapper>
                <Img src={img}/>
                <LoginButton />
            </ImgWrapper>
        )
    }
}
