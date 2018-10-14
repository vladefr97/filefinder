function getDataFromAPI(element) {
        var isDir = ($(element)).attr("data-isDirectory");
        element.setAttribute("data-clicked", "true");
        setItemSelected(element);
        var request = new XMLHttpRequest();
        var elementID = ($(element)).attr("id");

        if (isDir == "false") {
            getFileText(elementID)
            return;
        }
       var filePath =$(element).attr('id');
        getNodeFiles(filePath,element);
}





