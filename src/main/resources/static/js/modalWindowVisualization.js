/*function displayModalWindow(text) {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";

    };
    modal.style.display = "block";
    var modalContent = document.getElementsByClassName("modal-content")[0];
    modalContent.innerText = text;

}*/

/*
function displayCreateWindow(isFile) {
    var modal = document.getElementById("create-window");
    var span = document.getElementsByClassName("close")[1];
    var createFileBtn = document.getElementById("create-file-button");
    var cancelCreateBtn = document.getElementById("cancel-create-button");
    var textInput = $("#create-window input")[0];

    textInput.onfocus = function () {
        textInput.value = "";
    };

    span.onclick = function () {
        modal.style.display = "none";

    };
    textInput.onblur = function () {
        if (textInput.value === "")
            textInput.value = "Введите имя файла";
    };
    createFileBtn.onclick = function () {
        if (textInput != null) {
            var fileName = textInput.value;
            var selectedDirectory = document.getElementsByClassName("tree-node-selected")[0];
            var isDirectory = $(selectedDirectory).attr("data-isdirectory");
            if (selectedDirectory === undefined || isDirectory === "false") {
                alert("Выберите папку");
                return;
            }


            createFile(fileName, $(selectedDirectory).attr('id'), isFile);


            span.click();
            if(selectedDirectory.hasChildNodes()) {
                displayNode(selectedDirectory);
                displayNode(selectedDirectory);
            }else{
                displayNode(selectedDirectory);
            }


        }


    };
    cancelCreateBtn.onclick = function () {

        modal.style.display = "none";
    };

    modal.style.display = "block";
    /!*var modalContent = document.getElementsByClassName("modal-content")[0];
    modalContent.innerText = text;*!/
}
*/

function displayModalWindow() {
    var modal = document.getElementById("modal");
    var span = document.getElementById("close");
    var findFileBtn = document.getElementById("find-button");
    var cancelBtn = document.getElementById("cancel-button");
    var textInput = $("#modal input")[0];

    span.onclick = function () {
        modal.style.display = "none";

    };
    textInput.onfocus = function () {
        textInput.value = "";
    };
    textInput.onblur = function () {
        if (textInput.value === "")
            textInput.value = "Введите имя файла";
    };
    findFileBtn.onclick = function () {

    };
    cancelBtn.onclick = function () {

        modal.style.display = "none";
    };

    modal.style.display = "block";


}

function displayFindFileWindow() {


    var close = document.getElementById("close-find-file");
    var modal = document.getElementById("modal-find-file");
    var okBtn = document.getElementById("ok-find-file");
    var select = document.getElementById("select-find-file");
    var inputTxt = document.getElementById("text-find-file");
    var checkBox = document.getElementById("check-find-file");
    var inputPath = document.getElementById("path-find-file");
    var currentDir = document.getElementsByClassName("tree-node-selected")[0];
    var textToSend;
    var selectedDirToSend;
    var typeToSend;

    okBtn.onclick = function () {

        if (checkBox.disabled)
            selectedDirToSend = inputPath.value;
        else selectedDirToSend = $(currentDir).attr('id');
        if (selectedDirToSend === undefined) {
            showPrompt("Выберите директорию или введите путь", false);

            close.click();

        } else {
            textToSend = inputTxt.value;
            if (textToSend === undefined || textToSend === "") {
                showPrompt("Введите текст для поиска", false);
                close.click();
            } else {
                typeToSend = select.value;

                getFilesByText(selectedDirToSend, textToSend, typeToSend);
                close.click();
            }
        }

    };
    close.onclick = function () {
        modal.style.display = "none";

    };
    modal.style.display = "block";
}