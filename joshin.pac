function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 2)) {
        case 0: return "PROXY 140.227.211.117:3128; PROXY 64.124.38.140:8080; PROXY DIRECT; "
        case 1: return "PROXY 64.124.38.140:8080; PROXY 140.227.211.117:3128; PROXY DIRECT; "
    }
}
