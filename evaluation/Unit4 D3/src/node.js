class Node {
    constructor(item){
        this.data = item;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(item){
        let node = new Node(item);

        if(this.head === null)
            this.head = node;
            
        else{
            let cur = this.head;

            while(cur.next !== null){
                cur = cur.next;
            }

            cur.next = node;
        }
        this.size++;
    }

    printList(){
        let cur = this.head;
        let index = 0;

        while(cur !== null){
            console.log(`data : ${cur.data}, index : ${index++}`);
            cur = cur.next;
        }
        console.log(`size : ${this.size}`);
    }
}

let list = new linkedList;
list.add(10);
list.add(20);
list.add(30);
list.printList();





// let node1 = new Node(2);
// let node2 = new Node(4);
// let node3 = new Node(6);
// console.log(node1);
// console.log(node2);
// console.log(node3);
// node1.next = node2;
// node2.next = node3;
// console.log(node1);


Thank you for the motivation, knowledge, and insight you have given to us and for always being there for us. I appreciate the time and effort you spent on us during standup and in this whole masai journey and I hope we'll meet one day.