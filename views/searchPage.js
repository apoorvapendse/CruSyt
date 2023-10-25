// example search.js

function search() {
    // retrieve search input and platform filter value
    const searchInput = document.getElementById('searchInput').value;
    const platformFilter = document.getElementById('platformFilter').value;

    // show the information in the console
    // console.log('Search Query: ', searchInput);
    // console.log('Platform Filter: ', platformFilter);

    // perform search logic here
    
    // display search results in the 'searResults' div
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = `<p>Results for: ${searchInput}, Platform: ${platformFilter} </p>`;
}

function toggleDropdown() {
    var dropdown = document.getElementById("mydrpdwn");
    dropdown.classList.toggle("show");
}

function selectOption(option) {
    document.getElementById("searchInput").value = option;
    toggleDropdown();       // hide teh dropdown after selection
}

// close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drpbtn')) {
        var dropdowns = document.getElementsByClassName("drpdwnContent");
        for (var i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show') && !event.target.matches('.drpdwnContent a')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}