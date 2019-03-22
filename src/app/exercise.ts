import { ExerciseType } from './exercise-type';

export class Exercise {
  id: number;
  chapter_id: number;
  order_number: number;
  title: string;
  type: ExerciseType;
  nb_tests: number;
  subject_texts: string[];
  previous_codes: string[]
}