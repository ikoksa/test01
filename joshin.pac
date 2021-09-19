function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "PROXY 139.99.75.11:8080; PROXY 64.124.38.140:8080; PROXY DIRECT; "
        case 1: return "PROXY 64.124.38.140:8080; PROXY 175.130.219.8:9999; PROXY DIRECT; "
        case 2: return "PROXY 175.130.219.8:9999; PROXY 139.99.75.11:8080; PROXY DIRECT; "
    }
}
