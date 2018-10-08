function getFileText(filePath) {

    var request = new XMLHttpRequest();
    var url = "getFileText/" + filePath.toString().replace(new RegExp("/", "g"), "<prefix>");
    request.open("GET", url);
    request.send();

    request.onreadystatechange = function () {

        if (request.readyState == 4 && request.status == 200)//request
        {
            var answer = request.responseText;
            displayModalWindow(answer);
        }
    }


}