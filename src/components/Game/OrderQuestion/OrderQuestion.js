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
        // print prev state for TESTING
        //console.log("Prev state: " + this.state.rows['row-1'].imageIds)
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
        setTimeout(function() {

        }, 100);
        
        
    }

    //handle order change -- returns the order to the parent
    handleOrderChange = () => {
        let order = this.state.rows['row-1'].imageIds.toString();
        console.log("TEST: " + order)
        this.props.handleOrderChange(order)
    }

    render() {

        return (
            <DragDropContext onDragEnd = { this.onDragEnd }>
                <div onChange = { this.handleOrderChange }>
                    {this.state.rowOrder.map((rowId) => {
                        // get row order
                        const row = this.state.rows[rowId];
                        // get order of the images in the row
                        const images = row.imageIds.map(imageID => this.state.images[imageID]);
                        // print current state for TESTING
                        //console.log("Current state: " + this.state.rows['row-1'].imageIds.toString())
                        return (
                            <Row key = { row.id } row = { row } images = { images } />
                        )
                    })} 
                </div>
                
                
            </DragDropContext>
            
           
        
        )

        
    }
}

export default OrderQuestion;