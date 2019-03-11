/*

AiDen
By Typer
This work is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

*/

var page;

function share() {

    //open blank page
    page = window.open("about:blank");

    //rewrite page
    page.document.write("<div style='background-color: black; height: 100%;'><h1><span style='color: orange;'>Ai</span><span style='color: grey;'>Den</span></h1><p style='color: teal;'>Thank you for sharing.</p><a href='ethanzonecoding.github.io/AiDen/AiDen' style='color: green;'>ethanzonecoding.github.io/AiDen/AiDen</a><br><br><button onclick='print();'>Print</button></div>");
}

function report() {

    //open github
    window.open("https://github.com/EthanZoneCoding/AiDen/issues");
}