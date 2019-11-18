import React, { Component } from 'react';
import initialData from './initial-data';
import Row from './Row';
import { DragDropContext } from 'react-beautiful-dnd';

class OrderQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = initialData;
    }

    onDragEnd() {
        // reorder elements in row
    }

    render() {
        return (
            <DragDropContext onDragEnd = { this.onDragEnd }>
                {this.state.rowOrder.map((rowId) => {
                    // get row order
                    const row = this.state.rows[rowId];
                    // get order of the images in the row
                    const images = row.imageIds.map(imageID => this.state.images[imageID]);
                    return (
                        <Row key = { row.id } row = { row } images = { images } />
                    )
                })}
            </DragDropContext>
            
           
        
        )

        
    }
}

export default OrderQuestion;