function resetThumbnail(element) {
    return function () {
        let className = "img" + element.id;
        let rotator = document.getElementsByClassName(className);
        console.log(rotator.src);
        rotator.src = require('./images/' + element.thumbnail);

    }
}
export default resetThumbnail