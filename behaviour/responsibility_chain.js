class Example {
    constructor(init = 30){
        this.sum = init
    }
    add(num){
        this.sum += num
        return this
    }
}

const first = new Example()
console.log(first.add(7).add(5).add(10).sum)