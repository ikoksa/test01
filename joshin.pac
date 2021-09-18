function FindProxyForURL(url, host) {
    return randomProxy();
}
function randomProxy() {
    switch (Math.floor(Math.random() * 2)) {
        case 0: return "PROXY 202.212.123.44:80; PROXY 222.74.202.244; PROXY DIRECT; "
        case 1: return "PROXY 222.74.202.244:80; PROXY 202.212.123.44; PROXY DIRECT; "
    }
}
