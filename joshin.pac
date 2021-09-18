function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 2)) {
        case 0: return "PROXY 1.1.1.1:3128; PROXY 2.2.2.2; PROXY DIRECT; "
        case 1: return "PROXY 2.2.2.2:3128; PROXY 1.1.1.1; PROXY DIRECT; "
    }
}