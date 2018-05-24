import React from 'react';
import styled from 'styled-components';
import {ImgBackground} from "../imagebackground";
import {Filters} from "../filters";

const Wrapper = styled.div`
    display: ${props => props.active ? 'none' : 'flex'};
    flex-direction: column;
`;

const Header = styled.h1`
    align-self: center;
    font-family: Oswald;
    font-size: 50px;
`;

export class RegularPage extends React.Component {
    render() {
        return (
            <Wrapper active={this.props.active}>
                <ImgBackground/>
                <Header>Sprawdź swoją ulubioną muzykę na Spotify!</Header>
                <Filters />
            </Wrapper>
        )
    }
}