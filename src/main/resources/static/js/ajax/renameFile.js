function renameFile(dirName, oldFile, newFile) {

    $.get(
        "/renameFile",
        {
            directory: dirName,
            oldFileName: oldFile,
            newFileName: newFile
        },
        function (message) {

            var done = message.success;
            var msgText = message.messageText;
            var prompt = $(".prompt")[0];
            prompt.innerText = msgText;
            if (done) {
                prompt.setAttribute("class", "prompt success");
            }
            else {
                prompt.setAttribute("class", "prompt fault");
            }

            $(prompt).fadeIn();
            setTimeout(function () {
                $(prompt).fadeOut(2000);
            }, 1000);
        }
    );

}