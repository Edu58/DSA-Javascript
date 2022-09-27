/*
A tree is a non-linear data structure used to store data in a hierarchial manner
Binary trees are prefered becaues you can search binary tree very quickly, insert and delete data 

Trees are made up of nodes connected by edges
Nodes cannot have more than 2 children
A node withour children is called a Leaf

A binary search tree is a tree where the lesser data is stored on th eleft and the greater data on the right
*/

class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }

    show() {
        return this.data
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        var newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    findMin() {
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }

    findMax() {
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }
}

const newBST = new BST()
newBST.insert(9)
newBST.insert(4)
newBST.insert(12)
newBST.insert(3)
newBST.insert(19)
newBST.insert(6)
newBST.insert(5)
newBST.insert(21)
newBST.insert(8)
newBST.insert(2)
console.log(newBST.findMin())
console.log(newBST.findMax())