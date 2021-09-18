function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 2)) {
        case 0: return "PROXY 140.227.65.159:6000; PROXY 52.183.8.192; PROXY DIRECT; "
        case 1: return "PROXY 52.183.8.192:3128; PROXY 140.227.65.159; PROXY DIRECT; "
    }
}
