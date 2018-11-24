import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const WrapperBig = styled.div`
    background: white;
`;

const LinkToFavourites = styled(Link)`
    text-decoration: none;
`;

export class RegularPage extends React.Component {
    render() {
        return (
            <WrapperBig>
                <span>Not sure what do choose?</span><br/>
                <LinkToFavourites to='/favourites'>
                    <span>Check out your favourite music on Spotify!</span>
                </LinkToFavourites>
            </WrapperBig>
        )
    }
}
