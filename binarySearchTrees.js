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

    // recursive function to insert a new node
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

    /*
    Depth First Search includes - inOrder, preOrder & postOrder
    */

    /* 
    inOrder traversal
    An inorder traversal visits all of the nodes of a BST in ascending order of the node key values.
    */
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left)
            console.log(node.show() + " ")
            this.inOrder(node.right)
        }
    }

    preOrder(node) {
        if (node !== null) {
            console.log(node.show() + " ")
            this.inOrder(node.left)
            this.inOrder(node.right)
        }
    }

    postOrder(node) {
        if (node !== null) {
            this.inOrder(node.left)
            this.inOrder(node.right)
            console.log(node.show() + " ")
        }
    }

    find(data) {
        let current = this.root

        while (current.data != data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }

            if (current == null) {
                return null
            }
        }

        return current.data
    }
}

const newBST = new BST()
newBST.insert(23);
newBST.insert(45);
newBST.insert(16);
newBST.insert(37);
newBST.insert(3);
newBST.insert(99);
newBST.insert(22);
// console.log(newBST.findMin())
// console.log(newBST.findMax())
console.log(newBST.find(45))
//console.log(newBST.inOrder(newBST.root))
//console.log(newBST.preOrder(newBST.root))
// console.log(newBST.postOrder(newBST.root))