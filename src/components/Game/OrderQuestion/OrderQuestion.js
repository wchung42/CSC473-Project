import React, { Component } from 'react';
import initialData from './initial-data';
import Row from './Row';
import { DragDropContext } from 'react-beautiful-dnd';
import games from '../games.json'

class OrderQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = games[this.props.id].DragDrop_Data
        
    }
    
    // reorder elements in row
    // result object has draggableId, type, reason (drop or cancel), source and destination
    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        // handle if dragged out of dropzone
        if ( !destination ) {
            return;
        }

        if (
            destination.droppableId === source.droppableId && destination.index === source.index
        ) {
            return;
        }

        const row = this.state.rows[source.droppableId];
        const newImageIds = Array.from(row.imageIds);

        // move images from old index to new index
        newImageIds.splice(source.index, 1);
        newImageIds.splice(destination.index, 0, draggableId);

        const newRow = {
            ...row,
            imageIds: newImageIds,
        };

        const newState = {
            ...this.state,
            rows: {
                ...this.state.rows,
                [newRow.id]: newRow
            },
        };

        // todo: need to match this new state with a correct state
        this.setState(newState);

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