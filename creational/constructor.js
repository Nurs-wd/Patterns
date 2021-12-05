// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip;
// }

class Server{
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl() {
        return 'http://' + this.ip + ':80'
    }
}

Server.prototype.getUrl = function () {
    return 'https://' + this.ip + ':80'
}

const aws = new Server('AWS Kaz', '32.12.43.31')
console.log(aws.getUrl())