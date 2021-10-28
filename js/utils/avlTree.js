class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  getHeight(node) {
    let h = 0;
    if (node !== null) {
      const left = this.getHeight(node.left);
      const right = this.getHeight(node.right);
      const maxHeight = Math.max(left, right);
      h = maxHeight + 1;
    }
    return h;
  }
  getDiff(node) {
    const left = this.getHeight(node.left);
    const right = this.getHeight(node.right);
    return left - right;
  }
  rotateRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
  rotateLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  rotateLR(node) {
    const temp = node.left;
    node.left = this.rotateRR(temp);
    return this.rotateLL(node);
  }
  rotateRL(node) {
    const temp = node.right;
    node.right = this.rotateLL(temp);
    return this.rotateRR(node);
  }
  balance(node) {
    const factor = this.getDiff(node);
    if (factor > 1) {
      if (this.getDiff(node.left) > 0) node = this.rotateLL(node);
      else node = this.rotateLR(node);
    } else if (factor < -1) {
      if (this.getDiff(node.right) > 0) node = this.rotateRL(node);
      else node = this.rotateRR(node);
    }
    return node;
  }
  insert(root, data) {
    if (root === null) {
      root = new Node(data);
    } else if (data < root.data) {
      root.left = this.insert(root.left, data);
      root = this.balance(root);
    } else if (data >= root.data) {
      root.right = this.insert(root.right, data);
      root = this.balance(root);
    }
    return root;
  }
  find(root, data) {
    let current = root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      // 없으면 null 반환
      if (current === null) {
        return null;
      }
    }
    return current;
  }
}

let test = new AVL();
let root = test.root;

root = test.insert(root, 2);
root = test.insert(root, 1);
root = test.insert(root, 8);
root = test.insert(root, 9);
root = test.insert(root, 7);
root = test.insert(root, 3);
root = test.insert(root, 6);
root = test.insert(root, 4);

console.log(root);

console.log(test.find(root, 11));
