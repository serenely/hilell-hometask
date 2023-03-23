const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function checkAndAddProtocol(url) {
    const protocolRegex = /^(http|https):\/\//i;

    if (!protocolRegex.test(url)) {
        return "https://" + url;
    }
    return url;
}

function redirectToSite1() {
    const url = "example.com";
    const urlWithProtocol = checkAndAddProtocol(url);
    window.location.href = urlWithProtocol;
}

function redirectToSite2() {
    const url = "https://example.com";
    const urlWithProtocol = checkAndAddProtocol(url);
    window.location.href = urlWithProtocol;
}

button1.addEventListener("click", redirectToSite1);
button2.addEventListener("click", redirectToSite2);





