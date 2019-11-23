import React, { Component } from 'react';
import Row from './Row';
import { DragDropContext } from 'react-beautiful-dnd';
import games from '../games.json'

class OrderQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: games[this.props.id].DragDrop_Data,
            order: ''
        }

        this.handleOrderChange = this.handleOrderChange.bind(this)
    }

    // reorder elements in row
    // result object has draggableId, type, reason (drop or cancel), source and destination
    onDragEnd = result => {
        // print prev state for TESTING
        //console.log("Prev state: " + this.state.data.rows['row-1'].imageIds)
        const { destination, source, draggableId } = result;

        // handle if dragged out of dropzone
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId && destination.index === source.index
        ) {
            return;
        }

        const row = this.state.data.rows[source.droppableId];
        const newImageIds = Array.from(row.imageIds);

        // move images from old index to new index
        newImageIds.splice(source.index, 1);
        newImageIds.splice(destination.index, 0, draggableId);

        const newRow = {
            ...row,
            imageIds: newImageIds,
        };

        const newState = {
            ...this.state.data,
            rows: {
                ...this.state.data.rows,
                [newRow.id]: newRow
            },
        };


        // todo: need to match this new state with a correct state
        this.setState({
            data: newState,
            order: newState.rows['row-1'].imageIds.toString()
        });
        //console.log(this.state.order)

    }

    //handle order change -- returns the order to the parent
    handleOrderChange = () => {
        let currentOrder = this.state.data.rows['row-1'].imageIds.toString();
        console.log("TEST: " + currentOrder)
        this.props.handleOrderChange(currentOrder)

    }

    render() {

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.data.rowOrder.map((rowId) => {
                    // get row order
                    const row = this.state.data.rows[rowId];

                    // get order of the images in the row
                    const images = row.imageIds.map(imageID => this.state.data.images[imageID]);
                    // print current state for TESTING
                    //console.log("Current state: " + this.state.data.rows['row-1'].imageIds.toString())
                    // set state as current order
                    //console.log(this.state.order)
                    return (
                        <div className="orderQuestion">
                            <Row key={row.id} row={row} images={images} />
                            <button id="submitButtonOrderVerify" className="btn btn-primary" type="button" onClick={this.handleOrderChange} value="">&nbsp; Verify Order &nbsp;</button>
                        </div>


                    )
                })}


            </DragDropContext>



        )


    }
}

export default OrderQuestion;