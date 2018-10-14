var nextTextBtn = document.getElementById("next-text-button");

nextTextBtn.onclick = function () {

    var selectedElem = document.querySelector(".file-view.selected");
    var curNum = Number($(selectedElem).attr("data-cur-n"));
    var maxNum = Number($(selectedElem).attr("data-max-n"));
    var minNum = Number($(selectedElem).attr("data-min-n"));
    var prevNum = curNum - 1;
    var curTxt = document.querySelector(".file-view.selected span[data-txt-n=\'" + curNum + "\']");
    var prevTxt = document.querySelector(".file-view.selected span[data-txt-n=\'" + prevNum + "\']");

    if (curNum < maxNum) {

        if (curNum - 1 >= minNum) {
            $(prevTxt).toggleClass("selected");
        }
        $(curTxt).toggleClass("selected");
        selectedElem.setAttribute("data-cur-n", ++curNum);

    } else {
        prevTxt.setAttribute("class", "file-text");
        curTxt.setAttribute("class", "file-text selected");

    }


};
