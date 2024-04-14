let elementoEliminado = null;

class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierdo = null;
      this.derecho = null;
    };
};
   
  class ArbolBinario {
    constructor() {
      this.raiz = null;
    };
    // Métodos del árbol binario
    // ... Inserción de un elemento en un árbol binario ...
    insertar(valor) {
        const nuevoNodo = new Nodo(valor);

        if (this.raiz === null) {
          this.raiz = nuevoNodo;
        } else {
          this.insertarNodo(this.raiz, nuevoNodo);
        };
    };
    insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.valor < nodo.valor) {
          if (nodo.izquierdo === null) {
            nodo.izquierdo = nuevoNodo;
          } else {
            this.insertarNodo(nodo.izquierdo, nuevoNodo);
          };
        } else {
          if (nodo.derecho === null) {
            nodo.derecho = nuevoNodo;
          } else {
            this.insertarNodo(nodo.derecho, nuevoNodo);
          };
        };
    };
    // ... Búsqueda de un elemento en un árbol binario ...
    buscar(valor) {
        return this.buscarNodo(this.raiz, valor);
    };
    buscarNodo(nodo, valor) {
        if (nodo === null || nodo.valor === valor) {
          return nodo;
        } else if (valor < nodo.valor) {
          return this.buscarNodo(nodo.izquierdo, valor);
        } else {
          return this.buscarNodo(nodo.derecho, valor);
        };
    };
    // ... Eliminación de un elemento en un árbol binario ...
    eliminar(valor) {
        this.raiz = this.eliminarNodo(this.raiz, valor);
        };
    eliminarNodo(nodo, valor) {
        if (nodo === null) {
          return null;
        } else if (valor < nodo.valor) {
          nodo.izquierdo = this.eliminarNodo(nodo.izquierdo, valor);
          return nodo;
        } else if (valor > nodo.valor) {
          nodo.derecho = this.eliminarNodo(nodo.derecho, valor);
          return nodo;
        } else {
            if (nodo.izquierdo === null && nodo.derecho === null) {
              return null;
            } else if (nodo.izquierdo === null) {
              return nodo.derecho;
            } else if (nodo.derecho === null) {
              return nodo.izquierdo;
            } else {
              const sucesor = this.encontrarSucesor(nodo.derecho);
              nodo.valor = sucesor.valor;
              nodo.derecho = this.eliminarNodo(nodo.derecho, sucesor.valor);
              return nodo;
            }
        }
    };
    eliminarNodo(nodo, valor) {
        if (nodo === null) {
          return null;
        } else if (valor < nodo.valor) {
          nodo.izquierdo = this.eliminarNodo(nodo.izquierdo, valor);
          return nodo;
        } else if (valor > nodo.valor) {
          nodo.derecho = this.eliminarNodo(nodo.derecho, valor);
          return nodo;
        } else {
            if (nodo.izquierdo === null && nodo.derecho === null) {
              elementoEliminado = nodo.valor;
              return null;
            } else if (nodo.izquierdo === null) {
              elementoEliminado = nodo.valor;
              return nodo.derecho;
            } else if (nodo.derecho === null) {
              elementoEliminado = nodo.valor;
              return nodo.izquierdo;
            } else {
              const sucesor = this.encontrarSucesor(nodo.derecho);
              nodo.valor = sucesor.valor;
              elementoEliminado = sucesor.valor;
              nodo.derecho = this.eliminarNodo(nodo.derecho, sucesor.valor);
              return nodo;
            }
        }
    };
    encontrarSucesor(nodo) {
        let sucesor = nodo;
        while (sucesor.izquierdo !== null) {
          sucesor = sucesor.izquierdo;
        }
        return sucesor;
    };
    // ... Recorrido en orden de un árbol binario ...
    recorridoEnOrden() {
        this.recorrerEnOrden(this.raiz);
    };
    recorrerEnOrden(nodo) {
        if (nodo !== null) {
          this.recorrerEnOrden(nodo.izquierdo);
          console.log(nodo.valor);
          this.recorrerEnOrden(nodo.derecho);
        }
    };
    // ... Recorrido en preorden de un árbol binario ...
    recorridoPreOrden() {
        this.recorrerPreOrden(this.raiz);
    };
    recorrerPreOrden(nodo) {
        if (nodo !== null) {
          console.log(nodo.valor);
          this.recorrerPreOrden(nodo.izquierdo);
          this.recorrerPreOrden(nodo.derecho);
        }
    };
    // ... Recorrido en postorden de un árbol binario ...
    recorridoPostOrden() {
        this.recorrerPostOrden(this.raiz);
    };
    recorrerPostOrden(nodo) {
        if (nodo !== null) {
          this.recorrerPostOrden(nodo.izquierdo);
          this.recorrerPostOrden(nodo.derecho);
          console.log(nodo.valor);
        }
    };
};

const arbolBinario = new ArbolBinario();
arbolBinario.insertar(10);
arbolBinario.insertar(5);
arbolBinario.insertar(15);
arbolBinario.insertar(2);
arbolBinario.insertar(7);
arbolBinario.insertar(70);
console.log(arbolBinario);
//Buscar nodo
console.log(arbolBinario.buscar(7));
// Eliminar un valor del árbol
arbolBinario.eliminar(150);
// Recorrer el árbol en orden
console.log("Orden")
arbolBinario.recorridoEnOrden();
// Recorrer el árbol en preorden
console.log("Preorden")
arbolBinario.recorridoPreOrden();
// Recorrer el árbol en postorden
console.log("Postorden")
arbolBinario.recorridoPostOrden();