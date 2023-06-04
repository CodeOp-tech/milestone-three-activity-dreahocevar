/* ----------------------
Nota: ANTES de abordar la clase debajo, 
lee los tests del archivo correspondiente.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value <= this.value) {
      !this.left ? (this.left = new BinaryTree(value)) : this.left.add(value);
    } else {
      !this.right
        ? (this.right = new BinaryTree(value))
        : this.right.add(value);
    }
  }

  getValues() {
    let result = [];

    function traverse(node) {
      result.push(node.value); // Agregar el valor actual al array result

      if (node.left) {
        traverse(node.left); // Recorrer el subárbol izquierdo
      }

      if (node.right) {
        traverse(node.right); // Recorrer el subárbol derecho
      }
    }

    traverse(this);
    return result;
  }
}

module.exports = BinaryTree;
