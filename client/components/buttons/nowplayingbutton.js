import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: block;
    top: 1000px;
    border-radius: 500px;
    padding: 10px 50px;
    color: #fff;
    background-color: #1db954;
    border: none;
    font-size: 16px;
    outline: none;
`;

export class NowPlayingButton extends React.Component {
    render() {
        return (
            <Button onClick={() => this.props.getNowPlaying()}>
                Check Now Playing!
            </Button>
        )
    }
}