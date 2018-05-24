import React from 'react';
import styled from 'styled-components';
import {FilterRow} from "./filterrow";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    font-size: 30px;
`;

const FiltersHeader = styled.span `
    color: white;
    font-family: Oswald;
`;

const FiltersRows = styled.div `
    display: flex;
    flex-direction: column;
`;

export class Filters extends React.Component {
    render() {
        return (
            <Wrapper>
                <FiltersHeader>Wybierz filtry: </FiltersHeader>
                <FiltersRows>
                    <FilterRow filterType={true}/>
                    <FilterRow filterType={false}/>
                </FiltersRows>
            </Wrapper>
        )
    }
}