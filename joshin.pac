function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 2)) {
        case 0: return "PROXY 69.197.181.202:3128; PROXY 64.124.38.140:8080; PROXY DIRECT; "
        case 1: return "PROXY 64.124.38.140:8080; PROXY 69.197.181.202:3128; PROXY DIRECT; "
    }
}
