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

// component optimizes -- does not rerender all other items when a drag/drop event happens
class InnerImageList extends Component {
    // stops rendering of all dragitems together
    shouldComponentUpdate(nextProps) {
        if (nextProps.images === this.props.images) {
            return false;
        }
        return true;
    }
    render() {
        
        return (
             this.props.images.map((image, index)=> 
            <DragImage key = { image.id } image = { image } index = { index }/>
        ))
    }
}

class Row extends Component {
    render() {
        return (
            <Container>
                
                <Droppable droppableId = { this.props.row.id } direction = "horizontal">
                    {(provided) => (
                        <ImageList
                            // required droppable props --> added to component we want  to drop
                            ref = {provided.innerRef}
                            { ...provided.droppableProps }
                        >
                            <InnerImageList images = { this.props.images } />
                            { provided.placeholder }
                        </ImageList>
                    )}    
                       
                </Droppable>
               
            </Container>
        )
    }
}

export default Row;