function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 2)) {
        case 0: return "PROXY 13.112.197.90:8080; PROXY 64.124.38.140:8080; PROXY DIRECT; "
        case 1: return "PROXY 64.124.38.140:8080; PROXY 13.112.197.90:8080; PROXY DIRECT; "
    }
}
