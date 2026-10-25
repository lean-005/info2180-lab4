const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
    const httpRequest = new XMLHttpRequest();
    /*let url = "superheroes.php";*/
    
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200){
                let response = httpRequest.responseText;
                alert(response);
            } else {
                alert('There was a problem with the request.')
            }
        }
    };
    httpRequest.open ("GET", "superheroes.php");
    httpRequest.send();
});
