class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

/*
A circularly linked list is similar to a singly linked list and has the same type of nodes.
The only difference is that a circularly linked list, when created, has its head node’s next
property point back to itself.
*/

class linkedList {
    constructor() {
        this.head = new Node('head')
        // New line below
        this.head.next = this.head
        this.findAfter = findAfter
        this.findPrevious = findPrevious
        this.insert = insert
        this.remove = remove
        this.display = display
    }
}