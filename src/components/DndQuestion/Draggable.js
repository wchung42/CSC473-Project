import React from 'react';

function Draggable (props) {

    const dragStart = (event) => {
        const target = event.target;
        event.dataTransfer.setData('itemId', target.id);

        // set a timeout to show card while it is being dragged
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    }

    const dragOver = (event) => {
        // this will stop cards from overlapping each other
        event.stopPropagation();
    }

    return (
        <div id = { props.id } className = { props.className } canDrag = { props.canDrag } onDragStart = { dragStart } onDragOver = { dragOver }>
            { props.children }
        </div>
    )
}

export default Draggable;