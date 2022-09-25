class Dictionary {
    constructor() {
        this.dataStore = new Array()
    }

    find(key) {
        return this.dataStore[key]
    }

    display() {
        for (var key in this.dataStore) {
            console.log(key + ': ' + this.dataStore[key])
        }
    }

    insert(key, value) {
        this.dataStore[key] = value
    }

    remove(key) {
        delete this.dataStore[key]
    }

    count() {
        let count = 0
        for (let key in this.dataStore) {
            count++
        }
        return count

    }
}

const newDict = new Dictionary()
newDict.insert('name', 'edwin')
newDict.insert('email', 'edwin@mail.com')
// newDict.remove('name')
console.log(newDict.find('email'))
// newDict.display()
console.log(newDict.count())