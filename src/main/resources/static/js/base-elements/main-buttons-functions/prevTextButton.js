var prevTextBtn = document.getElementById("prev-text-button");

prevTextBtn.onclick = function () {
    var selectedElem = document.querySelector(".file-view.chosen");
    var curNum = Number($(selectedElem).attr("data-cur-n"));
    var prevNum = curNum - 1;

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
          /*  curTxt.setAttribute("class", "file-text chosen");*/

        }
    }


};
