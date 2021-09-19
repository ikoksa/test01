function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 1)) {
        case 0: return "PROXY 139.99.75.11:8080; PROXY 64.124.38.140:8080; PROXY DIRECT; "
    }
}
