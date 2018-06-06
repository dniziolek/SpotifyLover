import React from 'react';;
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #828282;
`;

const Img = styled.img`
    height: 80px;
    padding: 10px 20px;
`;

const Text = styled.span`
    font-weight: bold;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    color: white;
    text-align: right;
`;

export class NowPlaying extends React.Component {
    render() {
        return (
            <Wrapper>
                <TextWrapper>{this.props.nowPlaying.artist}
                    <Text> {this.props.nowPlaying.name}</Text>
                </TextWrapper>
                <div>
                    <Img src={this.props.nowPlaying.image}/>
                </div>
            </Wrapper>
        )
    }
}