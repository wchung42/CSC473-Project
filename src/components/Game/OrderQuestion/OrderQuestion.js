import React, { Component } from 'react';
import initialData from './initial-data';
import Row from './Row';

class OrderQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = initialData;
    }

    onDragEnd() {

    }

    render() {
        return this.state.rowOrder.map((rowId) => {
            // get row order
            const row = this.state.rows[rowId];
            // get order of the images in the row
            const images = row.imageIds.map(imageID => this.state.images[imageID]);
            return (
                <Row key = { row.id } row = { row } images = { images } />
            )
        })
        


        
    }
}

export default OrderQuestion;