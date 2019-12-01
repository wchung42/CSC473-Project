import React, { Component } from 'react';
import styled from 'styled-components';
import DragImage from './DragImage';
import { Droppable } from 'react-beautiful-dnd';

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
            this.props.images.map((image, index) =>
                <DragImage key={image.id} image={image} index={index} />
            ))
    }
}

class Row extends Component {
    render() {
        return (
            <div className='imageContainer'>

                <Droppable droppableId="nothing" direction="horizontal">
                    {(provided) => (
                        <div className='imagesList'
                            // required droppable props --> added to component we want  to drop
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <InnerImageList images={this.props.images} />
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>

            </div>
        )
    }
}

export default Row;