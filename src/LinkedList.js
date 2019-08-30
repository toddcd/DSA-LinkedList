class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, key) {
            if (!this.head) {
                this.insertFirst(item);
                return;
            }

            if (this.head.value === key) {
                this.head = new _Node(item, this.head)
                return;
            }

            else {
                // Start at the head
                let currNode = this.head;
                // Keep track of previous
                let previousNode = this.head;

                while ((currNode !== null) && (currNode.value !== key)) {
                    // Save the previous node
                    previousNode = currNode;
                    currNode = currNode.next;
                }
                if (currNode.value === key) {
                    const newNode = new _Node(item, currNode)
                    previousNode.next = newNode

                    return;
                }
                previousNode.next = currNode.next;
            }
        }

    insertAfter (item, key) {
        if (!this.head) {
            this.insertFirst(item);
            return;
        }
        if (this.head.value === key) {
            this.head.next = new _Node(item, this.head.next)
            return;
        }
        else {
            // Start at the head
            let currNode = this.head;
            while (currNode !== null && currNode.next !== null) {
                if (currNode.value === key) {
                    currNode.next = new _Node(item, currNode.next)
                    return;
                }
                currNode = currNode.next;
            }
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {

    let SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertFirst('Boomer')
    SLL.insertFirst('Helo')
    SLL.insertFirst('Husker')
    SLL.insertFirst('Starbuck')
    SLL.insertFirst('Tauhida')

    console.log(SLL.find('Starbuck'))
    // SLL.remove('Husker')
    SLL.insertAfter('Todd', 'Starbuck')

    //console.log(SLL)
    console.log(SLL.find('Starbuck'))
}

main()