import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    position: relative;
    top: 1000px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 500px;
    padding: 19px 56px 21px;
    color: #fff;
    background-color: #1db954;
    border: none;
    font-size: 16px;
    outline: none;
`;

export class LoginButton extends React.Component {
    render() {
        return (
            <a href="http://localhost:8888" >
                <Button>LOG IN WITH YOUR SPOTIFY ACCOUNT</Button>
            </a>
        )
    }
}