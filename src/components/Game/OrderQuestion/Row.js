import React, { Component } from 'react';
import styled from 'styled-components';
import DragImage from './DragImage';

// creating styled components 
const Container = styled.div`
    margin: 10px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

const Title = styled.div`
    padding: 10px;
`;

const ImageList = styled.div`
    padding: 10px;
`;

class Row extends Component {
    render() {
        return (
            <Container>
                <Title> { this.props.row.title }</Title>
                <ImageList>
                    { this.props.images.map(image => 
                        <DragImage key = { image.id } image = { image } />
                    )}
                </ImageList>
            </Container>
        )
    }
}

export default Row;