import { Component, OnInit, Input, AfterViewInit, AfterContentInit} from '@angular/core';

// Models
import { Chapter } from '../chapter';
import { Course } from '../course';
import { Exercise } from '../exercise';
import { Playground } from '../playground';
import { Proposition } from '../proposition';
// Services
import { AnswerService } from '../services/answer.service';
import { ChapterService } from '../services/chapter.service';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  course: Course;
  @Input() chapter_id: number;
  chapter: Chapter;
  playground: Playground;
  exercises: Exercise[];
  cursor: number;
  test_cursor: number;
  propositions: Proposition[];
  ranges: Map<number, Array<number>>;

  constructor(private answerService: AnswerService, 
    private chapterService: ChapterService, 
    private exerciseService: ExerciseService) { 
  }

  ngOnInit() {
    //
    this.chapter_id = typeof this.chapter_id == "undefined" ? 1 : this.chapter_id;
    this.playground = new Playground();
    this.playground.chapter_id = this.chapter_id;
    this.cursor = 0;
    this.test_cursor = 0;
    this.propositions = new Array<Proposition>();
    this.ranges = new Map();

    //
    this.getChapter();
    this.getExercises();
  }

  ngAfterContentInit() {
    var k = 0; 
    for (var i=0; i<this.exercises.length; i++) {
      this.playground.nb_tests += this.exercises[i].nb_tests;
      this.ranges.set(i, new Array<number>());
      for(var j=0; j<this.exercises[i].nb_tests; j++) {
        this.propositions.push(new Proposition(i, j));
        this.playground.validations.push(undefined);
        this.ranges.get(i).push(k);
        k++;
      }
    }
  }

  ngAfterViewInit() {
    this._setFocusOnTest();
  }

  getChapter() : void {
    this.chapterService.getChapter(this.chapter_id)
      .subscribe(chapter => this.chapter = chapter);
  }

  getExercises() : void {
    this.exerciseService.getExercises(this.chapter_id)
      .subscribe(exercises => this.exercises = exercises);
  }

  prevTest(): void {
    this._verifierTest();
    if (this.test_cursor > 0) {
      this.test_cursor--;
    }
    else if (this.cursor > 0) {
      this.cursor--;
      this.test_cursor = 0;
    } else {
      //
    }
    this._setFocusOnTest();
  }

  nextTest(): void {
    this._verifierTest();
    var current_exercise: Exercise = this.exercises[this.cursor];

    if (this.test_cursor < current_exercise.nb_tests - 1) {
      this.test_cursor++;
    }
    else if (this.cursor < this.exercises.length - 1) {
      this.cursor++;
      this.test_cursor = 0;
    } else {
      //
    }
    this._setFocusOnTest();
  }

  customTrackBy(index: number, obj: any): any {
	  return index;
  }

  _verifierTest(): void {
    var current_nb_tests = this.exercises[this.cursor].nb_tests;
    for (var i=0; i<current_nb_tests; i++) {
      var current_proposition = this.propositions.find(prop => prop.exercise_id === this.cursor && prop.test_id === i);
      var current_index = this.ranges.get(this.cursor)[i];

      if (this.playground.validations[current_index] === undefined || !this.playground.validations[current_index]) {
        
        if(current_proposition.value !== undefined && current_proposition.value !== null && current_proposition.value.length > 0) {
          
          this.playground.nb_tries[current_index] = this.playground.nb_tries[current_index] === undefined ? 1 : this.playground.nb_tries[current_index]++;
          this.playground.validations[current_index] = this.answerService.verifyAnswer(this.exercises[this.cursor].id, i, current_proposition.value);
          if (this.playground.validations[current_index])
            this.playground.nb_success += 1;
        }
      }
    }
  }

  _setFocusOnTest(): void {
    var e = <HTMLElement>document.querySelector('#answers_' + this.cursor + '_' + this.test_cursor);
    e.focus();
  } 

}
