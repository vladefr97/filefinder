function displayFoundFiles(fileViews, text) {
    var content = document.getElementById("accordeon-content");

    content.innerHTML = "";
    for (var fileView of fileViews) {

        var liElement = document.createElement('li');
        var divFileView = document.createElement('div');
        var divFileHeader = document.createElement('div');
        var divFileContent = document.createElement('div');
        divFileView.setAttribute("class", "file-view");
        divFileView.setAttribute("data-text", text);
        divFileHeader.setAttribute("class", "file-header");
        divFileContent.setAttribute("class", "file-content");
        divFileContent.innerText = fileView.fileContent;
        divFileHeader.innerText = fileView.fileName;
        divFileView.appendChild(divFileHeader);
        divFileView.appendChild(divFileContent);
        liElement.appendChild(divFileView);
        content.appendChild(liElement);
    }
    refreshAccordeon();


}
