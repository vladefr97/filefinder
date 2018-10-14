function getFilesByText(directory, text, format){

    $.get(
      "/getFilesByText" ,
        {
            selectedDirectory:directory,
            text:text,
            fileFormat:format
        }
        ,function (serverAnswer) {

          var msg = serverAnswer.message.messageText;
          var success = serverAnswer.message.success;
          var entity = serverAnswer.entity;

          showPrompt(msg,success);
          displayFoundFiles(entity, text);

        }
    );


}