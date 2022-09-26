/* 
THE ELEMENTS OF A SET ARE CALLED MEMBERS

• A set containing no members is called the empty set. The universe is the set of all
    possible members.
• Two sets are considered equal if they contain exactly the same members.
• A set is considered a subset of another set if all the members of the first set are
    contained in the second set.
`
THE FUNDAMENTAL OPERATIONS PERFOMED ON SETS ARE:
• union
• intersection
• difference
• subset
*/

class Set {
    constructor() {
        this.set = []
    }

    display() {
        console.log(this.set)
    }

    add(item) {
        if (this.set.indexOf(item) < 0) {
            this.set.push(item)
            return true
        }
        return false
    }

    remove(item) {
        let position = this.set.indexOf(item)

        if (position >= 0) {
            this.set.splice(position, 1)
            return true
        }
        return false
    }

    // Combine 2 sets into 1
    union(set) {
        let unionSet = new Set()
        for (let i = 0; i < this.set.length; i++) {
            unionSet.add(this.set[i])
        }

        for (let i = 0; i < set.length; i++) {
            unionSet.add(set[i])
        }
        return unionSet.set
    }

    // A set of members that exists on both sets
    intersection(set) {
        let intersectionSet = new Set()
        for (let i = 0; i < this.set.length; i++) {
            intersectionSet.add(this.set[i])
        }
        for (let i = 0; i < set.length; i++) {
            intersectionSet.add(set[i])
        }

        return intersectionSet.set
    }
}

const newSet = new Set()

newSet.add("burn")
newSet.add('hello')
newSet.add('yellow')
newSet.add('blue')
// newSet.remove('yellow')
newSet.add("cynthia")
newSet.add("mike")
newSet.add('blue')
newSet.add("raymond");
console.log(newSet.intersection(['mike', 'burn']))
//console.log(newSet.union(['keys', 'burn', 'hello', 'blue', 'runs', 'hello']))
// newSet.display()