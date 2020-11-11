window.onload = function () {
    var httpRequest = new XMLHttpRequest();
    var button = document.getElementsByClassName("btn");

    button[0].addEventListener("click", function (bttn) {

        bttn.preventDefault();
        var srcURL = "http://localhost/info2180-lab4/superheroes.php";
        httpRequest.open('GET', srcURL, false);
        httpRequest.send();
        httpRequest.onreadystatechange = main();

    });

    function main() {

        if (httpRequest.readyState == 3) { console.log("1"); }
        console.log(httpRequest.readyState)
        console.log(httpRequest.status)
        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
            var forAlert = httpRequest.responseText;
            alert(forAlert);
        } else {
            alert('There was a problem with the request.');
        }
    } console.log("4");
} 