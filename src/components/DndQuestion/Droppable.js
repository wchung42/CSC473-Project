import React from 'react';

function Droppable (props) {

    const drop = (event) => {
        event.preventDefault();

        // get item data for draggable object
        const cardId = event.dataTransfer.getData('itemId');
        const card = document.getElementById(cardId);
        card.style.display = 'block';
        event.target.appendChild(card);
    }

    const dragOver = (event) => {
        event.preventDefault();

    }

    return (
        <div id = { props.id } className = { props.className } onDrop = { drop } onDragOver = { dragOver }>
            { props.children }
        </div>
    )
}

export default Droppable;