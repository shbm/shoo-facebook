var message = "Don't Waste Time on Facebook...There's nothing new!";
console.log(message+" -ss");

var html = '<h1>'+ message +'<h1>';

function removeDummy() {
    var elem = document.getElementById("globalContainer");
    elem.innerHTML = html;
    return false;
}

removeDummy();
