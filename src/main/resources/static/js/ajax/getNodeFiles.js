/**
 * Created by Влад on 14.10.2018.
 */
function getNodeFiles(filePath, element) {
    $.get(
        "/getNodeFiles",
        {
            filePath: filePath
        }
        , function (files) {
            if (files.length == 0) return;
            var olElement = document.createElement('ol');
            olElement.setAttribute("class", "sortable");
            for (var i = 0; i < files.length; i++) {
                var liElement = document.createElement('li');
                var divElement = document.createElement('div');
                //  var innerDiv = document.createElement('div');
                var spanElement = document.createElement('span');
                var img = document.createElement('img');
                if (files[i].directory.toString() == "true") {
                    img.setAttribute("src", "https://icon-icons.com/icons2/548/PNG/32/1455554839_line-60_icon-icons.com_53339.png")
                }
                else {
                    img.setAttribute("src", "https://icon-icons.com/icons2/93/PNG/32/page_document_16748.png")

                }
                divElement.setAttribute("data-isDirectory", files[i].directory.toString());
                divElement.setAttribute("ondblclick", "displayNode(this)");
                divElement.setAttribute("onclick", "setItemSelected(this)");
                divElement.setAttribute("class", "tree-node");
                divElement.setAttribute("data-clicked", "false");
                divElement.id = files[i].absolutePath;
                spanElement.innerText = files[i].fileName;
                divElement.appendChild(img);
                divElement.appendChild(spanElement);
                liElement.appendChild(divElement);
                olElement.appendChild(liElement);
            }

            var parentElement = element.parentElement;
            $(olElement).appendTo(parentElement);
        }
    );
}