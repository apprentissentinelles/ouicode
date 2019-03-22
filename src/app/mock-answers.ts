import { Answer } from './answer';

export const ANSWERS: Answer[] = 
[
  {
    id: 1,
    exercise_id: 1,
    regex_validations: [
      /(((var|let)\s{1,}nombre_occurrences\s*:\s*number\s*;\s*)((var|let)\s{1,}is_trouve\s*:\s*boolean\s*;\s*)((var|let)\s{1,}sujet\s*:\s*string\s*;\s*))/g,
      /(((var|let)\s{1,}resultats_numeriques\s*:\s*number\[\]\s*;\s*)((var|let)\s{1,}resultats\s*:\s*boolean\[\]\s*;\s*)((var|let)\s{1,}sujets\s*:\s*string\[\]\s*;\s*))/g
    ]
  },
  {
    id: 2,
    exercise_id: 2,
    regex_validations: [
      /(((var|let)\s{1,}a\s*:\s*number\s*;\s*)((var|let)\s{1,}b\s*:\s*number\s*;\s*)((var|let)\s{1,}c\s*:\s*string\s*;\s*))/g,
      /test/g,
      /test/g
    ]
  },
  {
    id: 3,
    exercise_id: 3,
    regex_validations: [
      /(resultat_1\s*\=\s*((a\s*\*\s*b)|(b\s*\*\s*a))\s*;\s*)/g,
      /test/g
    ]
  }
];