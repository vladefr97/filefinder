function createFile(fileName, directoryName, isFile) {


    $.post(
        "/createFile",
        {
            directory: directoryName,
            fileName: fileName,
            isFile: isFile
        },
        function (message) {

            var text = message.messageText;
            var isDone = message.success;

            var prompt = $(".prompt")[0];
            prompt.innerText = text;
            if (isDone) {
                prompt.setAttribute("class","prompt success");
            }
            else {
                prompt.setAttribute("class","prompt fault");
            }

            $(prompt).fadeIn();
            setTimeout(function () {
                $(prompt).fadeOut(2000);
            }, 1000);

        }
    );


}