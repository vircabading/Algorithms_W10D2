class Node {

    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  
  class DoublyLinkedList {
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
  
    isEmpty() {
      if (this.head == null) {
        return true;
      }
      return false;
    }
  
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
  
    //insert a node at front
    insertAtFront(data) {
      let node = new Node(data);
  
      // Check if DLL is empty
      if(this.head == null){
        this.head = node;
        this.tail = node;
        return;
      }
  
      // Attach node to the head
      this.head.prev = node;
      node.next = this.head;
  
      // Move the head to the new Node
      this.head = node;
      
    }
  
      //insert a node at back
    insertAtBack(data) {
      // Make new node
      let newNode = new Node(data);
  
      // Check if is empty DLL  
      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      // Attach node to the tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
  
      // Move tail to new node
      this.tail = newNode;
  
    }
  
    printList() {
      let output = "";
      let runner = this.head;
      while (runner) {
        output += runner.data + " ";
        runner = runner.next;
      }
      console.log(output);
    }
  
  }
  
  const emptyList = new DoublyLinkedList();
  
  console.log(emptyList.toArray());
  
  let dLL1 = new DoublyLinkedList();
  
  console.log("*****************************");
  console.log("make empty DLL");
  console.log(dLL1.isEmpty());
  
  console.log("*****************************");
  console.log("Insert at back 10");
  dLL1.insertAtBack(10);
  dLL1.printList();
  
  console.log("*****************************");
  console.log("Insert at back 11, 12, 13");
  dLL1.insertAtBack(11);
  dLL1.insertAtBack(12);
  dLL1.insertAtBack(13);
  dLL1.printList();
  
  console.log("*****************************");
  console.log("Insert at front 4");
  dLL1.insertAtFront(4);
  dLL1.printList();
  
  console.log("*****************************");
  console.log("Insert at front 3,2,1");
  dLL1.insertAtFront(3);
  dLL1.insertAtFront(2);
  dLL1.insertAtFront(1);
  dLL1.printList();
  
  console.log("*****************************");
  console.log("test is empty DLL");
  console.log(dLL1.isEmpty());