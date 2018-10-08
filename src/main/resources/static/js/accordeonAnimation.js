var accordeonHeaders = document.getElementsByClassName("file-header");

for(var item of accordeonHeaders) item.addEventListener("click", function () {

    var fileContent = this.parentElement.childNodes[3];
    $(fileContent).toggleClass("visible");
});