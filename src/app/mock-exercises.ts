import { Exercise } from './exercise';
import { ExerciseType } from './exercise-type';

export const EXERCISES: Exercise[] = 
[
  {
    id: 1,
    chapter_id: 1,
    order_number: 1,
    title: 'Les types',
    type: ExerciseType.CODING,
    nb_tests: 2,
    subject_texts: [
      'Veuillez déclarer 3 variables nombre_occurrences, is_trouve et sujet. nombre_occurrences doit être de type numérique, is_trouve de type booléen et sujet une chaîne de caractère.',
      'Ajoutez resultats_numeriques de type tableau de valeurs numériques, resultat de type tableau de booleen et sujets de type tableau de chaine de caractère.'
    ],
    previous_codes: [
      '<span class="comments">// Déclaration de nombre_occurrences, is_trouve et sujet.</span>', 
      '<span class="comments">// Déclaration de resultats_numeriques, resultats et sujets.</span>'
    ]
  },
  {
    id: 2,
    chapter_id: 1,
    order_number: 2,
    title: 'Déclaration de variable et affectations simples',
    type: ExerciseType.CODING,
    nb_tests: 3,
    subject_texts: [
      'Veuillez déclarer 3 variables a, b et c. a et b doivent être des entiers.',
      'Ajoutez la condition suivante : `si a est inférieur à b alors mettre "A est moindre" dans c ...',
      'Ajoutez la condition suivante : ` ... sinon mettre "B est le moindre" dans c`.'
    ],
    previous_codes: [
      '<span class="comments">// Variables</span>', 
      '<span class="comments">// Conditions</span><br /><span class="code">if (a < b) {</span>',
      '<span class="code">}</span><br /><span class="comments">// autrement ...</span><br /><span class="code">else {</span>'
    ]
  },
  {
    id: 3,
    chapter_id: 1,
    order_number: 3,
    title: 'Opérations simples',
    type: ExerciseType.CODING,
    nb_tests: 2,
    subject_texts: [
      'Mettez dans resultat_1 le produit de a par b.',
      'Mettez dans resultat_2 le reste de la division euclidienne de a par b'
    ],
    previous_codes: [
      '<span class="comments">// Variables</span><br /><span class="code">let a: number = Math.floor(Math.random() * Math.floor(2));</span><br /><span class="code">let b: number = Math.floor(Math.random() * Math.floor(2));</span><br /><span class="code">let resultat_1:number;</span><br /><span class="code">let resultat_2:number;</span><br />', 
      '<span class="comments">// Affectation des resultats</span>'
    ]
  },
];