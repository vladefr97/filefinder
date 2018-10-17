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