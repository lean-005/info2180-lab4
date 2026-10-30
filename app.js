const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (event) {

    event.preventDefault();
    const httpRequest = new XMLHttpRequest();
    const searchInput = document.getElementById("searchInput").value;
    
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                document.getElementById("result").innerHTML = httpRequest.responseText;
            }
        }
    };
    httpRequest.open ("GET", "superheroes.php?query=" + encodeURIComponent(searchInput));
    httpRequest.send();
});
