import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Oswald;
    padding: 5px 10px;
`;

const ButtonFilter = styled.button`
    font-size: 12px;
    line-height: 1;
    border-radius: 500px;
    padding: 10px 32px;
    color: #fff;
    background-color: ${props => props.active ? '#1db954' : '#000'};
    outline: none;
    border: none;
    margin: 5px;
`;

export class FilterRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterFirstRow: 1.1,
            filterSecondRow: 2.1
        };
        this.toggleFiltersRow = this.toggleFiltersRow.bind(this);
    }

    toggleFiltersRow(filter, isFirstRow) {
        if(isFirstRow) {
            this.setState({
                filterFirstRow: filter
            });
        } else {
            this.setState({
                filterSecondRow: filter
            })
        }
    };

    isActive(key, isFirstRow) {
        if(isFirstRow) {
            return key === this.state.filterFirstRow;
        }
        return key === this.state.filterSecondRow;
    }

    render() {
        if(this.props.filterType === true) {
            return (
                <Wrapper>
                    <ButtonFilter onClick={() => this.toggleFiltersRow(1.1, true)} active={this.isActive(1.1, true)}>
                        Ulubieni wykonawcy
                    </ButtonFilter>
                    <ButtonFilter onClick={() => this.toggleFiltersRow(1.2, true)} active={this.isActive(1.2, true)}>
                        Ulubione piosenki
                    </ButtonFilter>
                    <ButtonFilter onClick={() =>this.toggleFiltersRow(1.3, true)} active={this.isActive(1.3, true)}>
                        Ulubione płyty
                    </ButtonFilter>
                </Wrapper>
            )
        } else return (
            <Wrapper>
                <ButtonFilter onClick={() => this.toggleFiltersRow(2.1, false)} active={this.isActive(2.1, false)}>
                    top 20
                </ButtonFilter>
                <ButtonFilter onClick={() => this.toggleFiltersRow(2.2, false)} active={this.isActive(2.2, false)}>
                    top 10
                </ButtonFilter>
                <ButtonFilter onClick={() => this.toggleFiltersRow(2.3, false)} active={this.isActive(2.3, false)}>
                    top 5
                </ButtonFilter>
            </Wrapper>
        )
    }
}