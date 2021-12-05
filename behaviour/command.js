class Example {
    constructor(init = 0) {
        this.num = init
    }
    pow(stage = 2) {
        return this.num**stage
    }

    cub() {
        return this.num**3
    }
}

class Command {
    constructor(sub) {
        this.sub = sub
        this.queue = []
    }

    complete(command) {
        this.queue.push(command)
        return this.sub[command]()
    }
}

const x = new Command(new Example(3))

console.log(x.complete('pow'))
console.log(x.complete('cub'))
console.log(x.queue)