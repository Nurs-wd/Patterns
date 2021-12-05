class Membership_1 {
    constructor(name) {
        this.name = name;
        this.cost = 50
    }
}
class Membership_2 {
    constructor(name) {
        this.name = name;
        this.cost = 200
    }
}
class Membership_3 {
    constructor(name) {
        this.name = name;
        this.cost = 500
    }
}

class MemberFactory{
    static list = {
        simple: Membership_1,
        standard: Membership_2,
        premium: Membership_3
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type;
        member.define = function () {
            console.log(`${this.name} ${this.type}: ${this.cost}`)
        }
        
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create('Joe', 'standard'),
    factory.create('Michael', 'simple'),
    factory.create('Rass', 'premium'),
    factory.create('Lana')
]

members.forEach((m) => {
    m.define()
})