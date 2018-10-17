var prevTextBtn = document.getElementById("prev-text-button");

prevTextBtn.onclick = function () {
    var selectedElem = document.querySelector(".file-view.chosen");
    var maxNum = Number($(selectedElem).attr("data-max-n"));
    var minNum = Number($(selectedElem).attr("data-min-n"));
    var curNum = Number($(selectedElem).attr("data-cur-n"));
    var prevNum = curNum - 1;
    if (minNum === maxNum) {
        curTxt.setAttribute("class","file-text chosen");
        return;
    }
    var prevTxt = document.querySelector(".file-view.chosen span[data-txt-n=\'" + prevNum + "\']");
    if (curNum > 1) {


        $(prevTxt).toggleClass("chosen");
        prevNum = prevNum - 1;
        var prevPrevTxt = document.querySelector(".file-view.chosen span[data-txt-n=\'" + prevNum + "\']");
        $(prevPrevTxt).toggleClass("chosen");
        selectedElem.setAttribute("data-cur-n", --curNum);
    } else {
        if (curNum === 1) {
            prevTxt.setAttribute("class", "file-text chosen");
            var curTxt = document.querySelector(".file-view.chosen span[data-txt-n=\'" + curNum + "\']");

        }
    }


};
