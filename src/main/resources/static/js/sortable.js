function setSortable() {
    var sortables = document.querySelectorAll(".sortable");

    for (var el of sortables) {
        $(el).nestedSortable({

// Set this to true to lock the parentship of items.
// They can only be re-ordered within theire current parent container.
            disableParentChange: false,

// Set this to true if you don't want empty lists to be removed.
            doNotClear: false,

// How long (in ms) to wait before expanding a collapsed node
// useful only if isTree: true
            expandOnHover: 700,

// You can specify a custom function to verify if a drop location is allowed.
            isAllowed: function () {
                return true;
            },

// Set this to true if you want to use the new tree functionality.
            isTree: false,

// The list type used (ordered or unordered).
            listType: "ol",

// The maximum depth of nested items the list can accept.
            maxLevels: 0,

// Whether to protect the root level
            protectRoot: false,

// The id given to the root element
            rootID: null,

// Set this to true if you have a right-to-left page.
            rtl: false,

// Set this to true if you want the plugin to collapse the tree on page load
            startCollapsed: false,

// How far right or left (in pixels) the item has to travel in order to be nested or to be sent outside its current list.
            tabSize: 20,

// custom classes
            branchClass: "mjs-nestedSortable-branch",
            collapsedClass: "mjs-nestedSortable-collapsed",
            disableNestingClass: "mjs-nestedSortable-no-nesting",
            errorClass: "mjs-nestedSortable-error",
            expandedClass: "mjs-nestedSortable-expanded",
            hoveringClass: "mjs-nestedSortable-hovering",
            leafClass: "mjs-nestedSortable-leaf",
            disabledClass: "mjs-nestedSortable-disabled"

        });

    }
}