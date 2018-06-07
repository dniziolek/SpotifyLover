import React from 'react';
import styled from 'styled-components';
import {FilterRow} from "./filterrow";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    font-size: 30px;
`;

const FiltersHeader = styled.span `
    color: white;
    font-family: Oswald;
    margin-right: 20px;
`;

const FiltersRows = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export class Filters extends React.Component {
    render() {
        return (
            <Wrapper>
                <FiltersHeader>Wybierz filtry: </FiltersHeader>
                <FiltersRows>
                    <FilterRow isFirstRow={true}/>
                    <FilterRow isFirsRow={false}/>
                </FiltersRows>
            </Wrapper>
        )
    }
}