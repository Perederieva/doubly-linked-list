const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
    }

    append(data) {
        if (this.length === 0) {
            this._head = new Node(data);
            this._tail = this._head;

        } else {
            var node = new Node(data, this._tail);
            this._tail.next = node;
            this._tail = node;
        }

        this.length++;
        return this;
    }

    head() {
        if (this.length === 0)
            return null;

        return this._head.data;
    }

    tail() {
        if (this.length === 0)
            return null;

        return this._tail.data;
    }

    at(index) {
        if (this.length === 0) {
            return null;
        }

        var currentIndex = 0;
        var currentNode = this._head;

        while (currentIndex <= index) {
            if (index === currentIndex) {
                return currentNode.data;
            } else {
                currentNode = currentNode.next;
                currentIndex++;
            }
        }

    }

    insertAt(index, data) {

        var currentIndex = 0;
        var currentNode = this._head;

        if(this.length === 0) {
            this._head = new Node(data);
            this.length++;
            return;
        }

        while (currentIndex <= index) {
            if (index === currentIndex) {
                var node = new Node(data, currentNode.prev, currentNode);
                currentNode.prev.next = node;
                currentNode.prev = node;
                this.length++;
                break;
            } else {
                currentNode = currentNode.next;
                currentIndex++;
            }
        }

    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {

        var prevNode = this._tail;

        while (this.length > 0) {
            prevNode = this._tail.prev;
            this._tail = null;
            this._tail = prevNode;
            this.length--;

            if(this.length === 0)
                this._head = null;
        }

        return this;
    }

    deleteAt(index) {

        if(index === 0) {
            var next = this._head.next;
            this._head = null;
            this._head = next;
            this.length--;
            return this;
        }

        var currentIndex = 0;
        var currentNode = this._head;

        while (currentIndex <= index) {
            if (index === currentIndex) {
                currentNode.prev.next = currentNode.next;
                currentNode.next = currentNode.prev.next;
                currentNode = null;
                this.length--;
                break;
            } else {
                currentNode = currentNode.next;
                currentIndex++;
            }
        }
        return this;
    }

    reverse() {
        var currentNode = this._head;
        var prevNode = null;
        var nextNode = null;

        while (currentNode !== null) {
            nextNode = currentNode.next;
            prevNode = currentNode.prev;

            currentNode.next = prevNode;
            currentNode.prev = nextNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }

        this._tail = this._head;
        this._head = prevNode;
        return this;
    }

    indexOf(data) {
        var currentIndex = 0;
        var currentNode = this._head;

        while (currentNode !== null) {
            if (data === currentNode.data) {
                return currentIndex;
            } else {
                currentIndex++;
                currentNode = currentNode.next;
            }
        }

        return -1;
    }
}

module.exports = LinkedList;
