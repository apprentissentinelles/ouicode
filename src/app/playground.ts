export class Playground {
  user_id: number;
  chapter_id: number;
  nb_success: number;
  nb_tests: number;
  validations: boolean[];
  nb_tries: number[];
  time_in_millis: number;
  
  constructor() {
    this.time_in_millis = 0;
    this.nb_success = 0;
    this.nb_tests = 0;
    this.validations = Array<boolean>();
    this.nb_tries = Array<number>();
  }
}