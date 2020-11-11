
const query = document.getElementById("input");
const resultSect = document.getElementById("result");

document.addEventListener("DOMContentLoaded", starter);

function starter(){
    document.getElementById("search").addEventListener("click", processRqst);
    //button.preventDefault();
    if(resultSect != null){
        resultSect.classList.remove("red");

    };
}

    // var queriedHero = document.getElementsByClassName("inputField").value;


function processRqst() {

    const hr = new XMLHttpRequest();

    //if (httpRequest.readyState == 3) { console.log("1"); }
    //console.log(httpRequest.readyState)
    console.log(hr.status);
    hr.onreadystatechange = function(){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            resultSect.innerHTML = this.responseText;
            if(this.responseText != "Superhero not found"){
                resultSect.classList.remove("red-alert");
            }else{
                resultSect.classList.add("red-alert");
            }
            //alert(forAlert);
        }
        // else {
        //    alert('There was a problem with the request.');
    // }
    }; 
    //console.log("4");
    hr.open("GET", "superheroes.php?query=" + query.value, true);
    hr.send();
    query.value = "";
} 