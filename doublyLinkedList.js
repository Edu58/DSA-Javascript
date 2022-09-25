class Node {
    constructor(element) {
        this.element = element
        this.next = null
        this.previous = null
    }
}

class doublyLinkedList {
    constructor() {
        this.head = new Node('head')
    }

    display() {
        let currNode = this.head
        while (currNode.next !== null) {
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }

    displayReverse() {
        let currNode = this.findLast()
        while (currNode.previous !== null) {
            console.log(currNode.element)
            currNode = currNode.previous
        }
    }

    find(item) {
        let currNode = this.head
        while (currNode.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }

    findPrevious(beforeElement) {
        let currNode = this.head
        while (currNode.next !== null && currNode.next.element !== beforeElement) {
            currNode = currNode.next
        }
        return currNode
    }

    findLast() {
        let currNode = this.head
        while (currNode.next !== null) {
            currNode = currNode.next
        }
        return currNode
    }

    insert(newElement, item) {
        let newNode = new Node(newElement)
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    remove(element) {
        let prevNode = this.findPrevious(element)
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next
            prevNode.next.previous = prevNode
        }
    }
}

const names = new doublyLinkedList()
names.insert('hello', 'head')
names.insert('mine', 'hello')
names.insert('call', 'mine')
names.remove('mine')
names.insert('walker', 'call')
names.displayReverse()
