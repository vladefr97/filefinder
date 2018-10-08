function displayNode(element) {
    var isDir = ($(element)).attr("data-isDirectory");
    if(isDir=="true")
        displayDirectory(element);
    else
        displayFile(element);
}
function displayDirectory(element) {

    directoryAnimation(element);
    setTimeout(function () {
        var img = element.childNodes[0];
        img.style.display="inline";
        element.removeChild(element.childNodes[2]);
        getDataFromAPI(element);

    },1000);
}
function displayFile(element) {
    var filePath = $(element).attr('id');

    getFileText(filePath)

}