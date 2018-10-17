/*Request to the server in order to get files by specified text*/
function getFilesByText(directory, text, format) {

    var answerd = false;
    var content = document.getElementById("accordeon-content");

    showPrompt("Начат поиск файлов...", true);
    $.get(
        "/getFilesByText",
        {
            selectedDirectory: directory,
            text: text,
            fileFormat: format
        }
        , function (serverAnswer) {

            answerd = true;
            var msg = serverAnswer.message.messageText;
            var success = serverAnswer.message.success;
            var entity = serverAnswer.entity;

            showPrompt(msg, success);
            displayFoundFiles(entity, text);

        }
    );

}