import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
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

export class ButtonFilter extends React.Component {
    render() {
        return (
            <Button
                onClick={() => this.props.toggleFiltersRow(this.props.key, this.props.isFirstRow)}
                active={this.props.isActive(this.props.keys, this.props.isFirstRow)}>
                {this.props.children}
            </Button>
        )
    }
}