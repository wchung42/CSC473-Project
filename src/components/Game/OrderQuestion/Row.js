import React, { Component } from 'react';
import styled from 'styled-components';
import DragImage from './DragImage';
import { Droppable } from 'react-beautiful-dnd';

// creating styled components 
const Container = styled.div`
    margin: 10px;
    border: 1px solid lightgrey;
    border-radius: 2px;

`;

const Title = styled.h2`
    padding: 10px;
`;

const ImageList = styled.div`
    margin: 0 auto;
    padding: 10px;
    display: flex;
`;

class Row extends Component {
    render() {
        return (
            <Container>
                <Title> { this.props.row.title }</Title>
                <Droppable droppableId = { this.props.row.id } direction = "horizontal">
                    {(provided) => (
                        <ImageList
                            // required droppable props --> added to component we want  to drop
                            ref = {provided.innerRef}
                            { ...provided.droppableProps }
                        >
                            { this.props.images.map((image, index)=> 
                                <DragImage key = { image.id } image = { image } index = { index }/>
                            )}
                            { provided.placeholder }
                        </ImageList>
                    )}    
                       
                </Droppable>
               
            </Container>
        )
    }
}

export default Row;