function refreshAccordeon() {
    var accordeonHeaders = document.getElementsByClassName("file-header");

    var selectedFileViews = document.getElementsByClassName("file-view");
    var i = 0;
    for (var elem of selectedFileViews) {
        var text = $(elem).attr("data-text");
        elem.setAttribute("data-n", i);
        var fileContent = elem.childNodes[1].innerText;
        var newText = `<span class='file-text'>${text}</span>`;
        var reg = new RegExp(text, 'g');
        fileContent = fileContent.replace(reg, newText);
        elem.childNodes[1].innerHTML = fileContent;
        var fileViewsTexts = document.querySelectorAll(".file-view[data-n=\'" + i + "\'] span");
        var j = 0;
        for (var txtItem of fileViewsTexts) {
            txtItem.setAttribute("data-txt-n", j);
            j++;
        }
        elem.setAttribute("data-min-n", 0);
        elem.setAttribute("data-max-n", j - 1);
        elem.setAttribute("data-cur-n", 0);

        i++;
    }

    for (var item of accordeonHeaders) {
        item.onclick = function () {

            var prevSelectedElem = document.getElementsByClassName("chosen")[0];
            if (prevSelectedElem === undefined || prevSelectedElem === null) {
                this.parentElement.setAttribute("class", "file-view chosen");
                $(this.parentElement.childNodes[1]).toggleClass("visible");

            } else if (prevSelectedElem == this.parentElement) {
                $(this.parentElement.childNodes[1]).toggleClass("visible");

            } else {

                $(prevSelectedElem).toggleClass("chosen");
                $(this.parentElement).toggleClass("chosen");
                $(this.parentElement.childNodes[1]).toggleClass("visible");


            }
        };

    }
}