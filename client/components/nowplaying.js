import React from 'react';;
import styled from 'styled-components';
import {NowPlayingButton} from "./buttons/nowplayingbutton";

const Wrapper = styled.div`
    margin-top: 50px;
`;

export class NowPlaying extends React.Component {
    render() {
        return (
            <Wrapper>
                <div>Now playing: {this.props.nowPlaying.name}</div>
                <div><img src={this.props.nowPlaying.image}/></div>
                <NowPlayingButton getNowPlaying={() => this.props.getNowPlaying()}>
                    Check Now Playing!
                </NowPlayingButton>
            </Wrapper>
        )
    }
}