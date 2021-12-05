class Complaints {
    constructor() {
        this.complaints = []
    }

    reply(complaint) {}
    
    add(complaint) {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints {
    reply({ id, name, description }) {
        return `Product: ${id} : ${name} (${description})`
    }
}

class ServiceComplaints extends Complaints {
    reply({ id, name, description }) {
        return `Service: ${id} : ${name} (${description})`
    }
}

class ComplaintRegistry {
    register(name, type, description) {
        const id = Date.now()
        let complaint
        
        if (type === 'service') {
            complaint = new ServiceComplaints()
        }
        else {
            complaint = new ProductComplaints()
        }
        return complaint.add({id, name, description})
    }
}

const reg = new ComplaintRegistry()

console.log(reg.register('Joe', 'product', 'not available'))