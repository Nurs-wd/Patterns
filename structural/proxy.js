function network(url) {
    return `${url} - response from server`
}

const cache = new Set()

const proxiedfetch = new Proxy(network, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) {
            return `${url} - resp from cache`
        }
        else {
            cache.add(url)
            return Reflect.apply(target,thisArg, args);
        }
    }
})

console.log(proxiedfetch('react.com')) //server
console.log(proxiedfetch('vk.com')) //server
console.log(proxiedfetch('react.com')) //cache