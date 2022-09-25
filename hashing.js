/*
One constraint usually placed on the array size is that it should be a prime number.
If your key is an integer, then the simplest hash function is to return the key modulo the size of the array.

There are circumstances when this function is not recommended, such as when the keys
all end in 0 and the array size is 10. This is one reason the array size should always be a
prime number, such as 137.

The size of the array needs to be greater than 100 in order to more evenly disperse the keys in the table.

Also, if the keys are random integers, then the hash function should more
evenly distribute the keys. This type of hashing is known as modular hashing.

A simple hash function that at first glance seems to work well is to sum the ASCII value
of the letters in the key. The hash value is then that sum modulo the array size.
*/
class SimpleHash {
    constructor() {
        this.table = new Array(137)
    }

    /*adds a step by multiplying the resulting total by a prime constant to reduce hash collissions
    When a collision occurs, we still need to be able to store the key at the generated index
    Separate chaining is a technique where each array element of a hash table stores another data structure, 
    such as another array, which is then used to store keys.
    */
    hash(data) {
        let primeConstant = 31
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
            total += primeConstant * total + data.charCodeAt(i);
        }
        return parseInt(total % this.table.length);
    }

    put(key, data) {
        let hash = this.hash(key)
        if (this.table[hash] === undefined) {
            this.table[hash] = []
        }

        return this.table[hash].push([key, data])
    }

    show() {
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }

    get(key) {
        let hash = this.hash(key)

        for (let i = 0; i < this.table[hash].length; i++) {
            if (this.table[hash][i][0] === key) {
                return this.table[hash][i][0]
            }
        }
        return undefined
    }
}


const names = ["danny", "jonathan", "walker", "grace", "minion", "clayton", "raymond", "donnie", "cynthia"]

const newTable = new SimpleHash()

for (let i = 0; i < names.length; i++) {
    newTable.put(names[i])
}

console.log(newTable.get('grace'))