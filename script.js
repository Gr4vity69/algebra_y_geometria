const cards = [
  {
    q: '¿Qué significa que det(A)=0?',
    a: 'Que A es singular, no tiene inversa, su rango es menor que el orden y sus filas/columnas son linealmente dependientes.'
  },
  {
    q: '¿Cuándo un conjunto de vectores es linealmente independiente?',
    a: 'Cuando la única combinación lineal que da el vector nulo es la trivial: todos los escalares iguales a cero.'
  },
  {
    q: '¿Qué representa el rango de una matriz?',
    a: 'La cantidad de filas o columnas independientes. Mide cuánta información no redundante tiene la matriz.'
  },
  {
    q: '¿Qué dice Rouché-Frobenius si rango(A) ≠ rango(A*)?',
    a: 'El sistema es incompatible: no tiene solución.'
  },
  {
    q: '¿Por qué AB ≠ BA es importante?',
    a: 'Porque el producto de matrices no es conmutativo en general. Cambiar el orden puede cambiar el resultado o incluso hacerlo imposible.'
  },
  {
    q: '¿Cuándo se puede aplicar Cramer?',
    a: 'Cuando el sistema es cuadrado y det(A) ≠ 0.'
  },
  {
    q: '¿Qué significa que dos vectores sean dependientes lineales en R²?',
    a: 'Que son paralelos: uno es múltiplo del otro.'
  },
  {
    q: 'Si det(A) ≠ 0, ¿qué conclusiones podés sacar?',
    a: 'A es invertible, tiene rango máximo, columnas LI y el sistema asociado tiene solución única.'
  }
];

let current = -1;
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const next = document.getElementById('nextCard');
const show = document.getElementById('showAnswer');

function nextCard(){
  current = (current + 1) % cards.length;
  question.textContent = cards[current].q;
  answer.textContent = cards[current].a;
  answer.classList.add('hidden');
}

next.addEventListener('click', nextCard);
show.addEventListener('click', () => answer.classList.toggle('hidden'));
