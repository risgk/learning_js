window.onload = function() {
    window.alert("Hello world!");
    var ok = window.confirm("Are you OK?");
    console.log(ok);
    var from = window.prompt("Who are you from?","Tokyo");
    console.log(from);
    
    var btnA = document.getElementById("btnA");
    btnA.onclick = function() {
        window.alert("Hello another world!");
        btnA.style.width = "50%";
    }
};
