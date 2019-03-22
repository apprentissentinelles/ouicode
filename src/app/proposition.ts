export class Proposition {
  exercise_id: number;
  test_id: number;
  value: string;

  constructor(exercise_id:number, test_id:number) {
    this.exercise_id = exercise_id;
    this.test_id = test_id;
  }
}