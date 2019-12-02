import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import './orderQuestion.css';

class DragImage extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.image.id} index={this.props.index}>
                {(provided) => (
                    <div className="imageQuestion"
                        // necessary draggable props --> makes each item draggable
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <img src={this.props.image.url} alt={this.props.image.id}></img>
                    </div>
                )}

            </Draggable>

        );
    }
}

export default DragImage;