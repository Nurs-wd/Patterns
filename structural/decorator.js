class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true;
    server.awsInfo = function () {
        return server.url
    }
    return server
}

function azure(server) {
    server.isAzure = true;
    server.port += 100
    return server
}

const i = aws(new Server('32.243.12', 3000))
console.log(i.isAWS)
console.log(i.awsInfo())

const a = azure(new Server('24.43.322', 900))
console.log(a.isAzure, a.url)