var source;
function start() {
    if(typeof EventSource !== "undefined") {
        source = new EventSource("http://localhost:8000");
        source.onmessage = function(e) {
            console.log("🚀 ~ file: index.js:6 ~ start ~ e:", e)
            document.getElementById("result").innerHTML += e.data + "<br/>";
        };

        source.onopen = function(e) {
            console.log("🚀 ~ file: index.js:11 ~ start ~ e:", e)
            document.getElementById("result").innerHTML = "Connection established";
        };

        source.onerror = function(e) {
            document.getElementById("result").innerHTML = "Connection failed";
        };

    } else {
        document.getElementById("result").innerHTML = "Your browser does not support SSE";
    }
}

function stop() {
    source.close();
    console.log('%c Connection closed','background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px',);
}