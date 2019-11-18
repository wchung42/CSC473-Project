import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from  'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid black;
    border-radius: 2px;
    padding: 10px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    justify-content: center;
`;

class DragImage extends Component {
    render() {
        return (
            <Draggable draggableId = { this.props.image.id } index = { this.props.index }>
                {(provided) => (
                    <Container
                        // necessary draggable props --> makes each item draggable
                        ref = {provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        
                    >
                        <img src = { this.props.image.url } alt = { this.props.image.id }></img>
                    </Container>
                )}
              
            </Draggable>
            
        );
    }
}

export default DragImage;