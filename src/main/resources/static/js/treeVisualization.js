function setItemSelected(item) {

    $(".tree-node-selected").removeClass("tree-node-selected");
    var itemId = ($(item)).attr("id");
    if (itemId == "content") {
        return;
    }

    item.setAttribute("class", "tree-node tree-node-selected");

}