import React from 'react';

// import items from '../../games.json';

function changeImageOverTime(element) {
    return function () {
        let id = element.id;
        let className = "img" + id;
        let rotator = document.getElementsByClassName(className);
        let num = 1;
        let dir = './images/' + id;
        let source = dir + "/" + num + '.jpg';
        let limit = element.images;
        console.log(id);
        console.log(className);
        console.log(source);
        console.log(rotator.src);
        // setInterval(function () {                           //interval changer
        //     rotator.src = require(dir + "/" + num + '.jpg');                 //reset if limit reached
        //     num = (num === limit) ? 1 : ++num;                                    //increment counter
        // }, 1 * 1000);
        // rotator.src = "https://pbs.twimg.com/media/DV4pD0pVAAUVWFf.png";
    }
}



export default changeImageOverTime

// const List = (props) => {
//     let item = props.game;
//     let className = "img" + item.id;
//     console.log(className);
//     const rotator = document.getElementsByClassName(className);
//     console.log("rotator: ", rotator);
//     console.log("rotator source: ", rotator.src);
//     console.log(__dirname);
//     


// let delayInSeconds = 1;


// console.log("rotator source: ", rotator.src);
// return null;
// }




