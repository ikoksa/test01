function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 2)) {
        case 0: return "PROXY 20.81.62.32:3128; PROXY 64.124.38.140:8080; PROXY DIRECT; "
        case 1: return "PROXY 64.124.38.140:8080; PROXY 20.81.62.32:3128; PROXY DIRECT; "
    }
}
