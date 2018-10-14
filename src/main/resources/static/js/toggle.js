function toggleEnabled(id) {
    var element = document.getElementById(id);
    element.disabled = !element.disabled;

    element.value = "";
}
