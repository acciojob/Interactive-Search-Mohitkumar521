//your JS code here. If required.
function activateSearch() {
    var searchContainer = document.getElementById("searchContainer");
    var searchInput = document.getElementById("searchInput");

    // Add the "active" class to the search container
    searchContainer.classList.add("active");

    // Focus on the input element
    searchInput.focus();
}
