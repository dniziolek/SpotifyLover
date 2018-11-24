import React from 'react';
import {Link} from "react-router-dom";

import styled from 'styled-components';

import {ImgBackground} from "../imagebackground";
import {Filters} from "../filters";
import {NowPlaying} from "../nowplaying";

const WrapperBig = styled.div`
    display: flex;
    flex-direction: column;
`;

const WrapperSmall = styled.div`
    flex-direction: column;
`;

const Header = styled.h1`
    align-self: center;
    font-family: Oswald;
    font-size: 50px;
`;

const LinkToMainPage = styled(Link)`
    color: black;
`;

export class FavouritesPage extends React.Component {
    render() {
        return (
            <WrapperBig>
                <WrapperSmall>
                    <ImgBackground/>
                    <Header>Sprawdź swoją ulubioną muzykę <br/> na Spotify!</Header>
                    <Filters />
                </WrapperSmall>
                <LinkToMainPage to="/">Back to Karaoke</LinkToMainPage>
                <NowPlaying nowPlaying={this.props.nowPlaying} />
            </WrapperBig>
        )
    }
}
