function todo() {

    return this
}

todo2 = {
    name: 21,
    pop() {
        return this
    }
}

console.log(todo())

let p = new todo();

console.log(p)


console.log(todo2.pop())