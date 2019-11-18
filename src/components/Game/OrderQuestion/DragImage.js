import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid blue;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
`;

class DragImage extends Component {
    render() {
        return (
            <Container>
                <img src = { this.props.image.url } alt = { this.props.image.id }></img>
            </Container>
        )
    }
}

export default DragImage;