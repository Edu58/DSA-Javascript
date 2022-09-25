class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = new Node('head')
    }
    // To insert a node after an existing node, we first have to find the “after” node.
    findAfter(item) {
        let currNode = this.head
        while (currNode.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }

    // In order to remove a node from a linked list, we need to find the node that is just before the node we want to remove.
    findPrevious(item) {
        let currNode = this.head
        while (!currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }

    insert(newElement, afterNode) {
        let newNode = new Node(newElement)
        let currentNode = this.findAfter(afterNode)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }

    remove(item) {
        let prevNode = this.findPrevious(item)
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next
        }
    }

    display() {
        let currNode = this.head

        while (currNode.next !== null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }
}


const cities = new linkedList()
cities.insert('conway', 'head')
cities.insert('Alma', 'conway')
cities.insert('Nairobi', 'Alma')
cities.insert("Kagumo", "Nairobi");
cities.display()