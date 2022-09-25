// A list where data is inserted at the end and removed from the front
// A queue is an example of a first-in, first-out (FIFO) data structure.
// Removal operation is called dequeue and Insertion operation is called enqueue
// Viewing an element at the front is called Peek

function Queue() {
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
}

function enqueue(element) {
    return this.dataStore.push(element)
}

function dequeue() {
    return this.dataStore.shift()
}

function front() {
    return this.dataStore[0]
}

function back() {
    return this.dataStore[this.dataStore.length-1]
}

function toString() {
    let converted = ""

    for(let i=0; i<this.dataStore.length; i++) {
        converted += this.dataStore[i] + '\n'
    }
    
    return converted
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

const MAN = new Queue()

MAN.enqueue('hello')
MAN.enqueue('there')
MAN.enqueue('mr')
MAN.enqueue('man')

console.log(MAN.toString())
console.log(MAN.front())
console.log(MAN.back())