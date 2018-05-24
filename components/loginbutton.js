import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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
        return <Button onClick={this.props.toggleModal}>LOG IN WITH YOUR SPOTIFY ACCOUNT</Button>
    }
}