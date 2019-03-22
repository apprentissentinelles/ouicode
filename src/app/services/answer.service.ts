import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Answer } from '../answer';
import { ANSWERS } from '../mock-answers';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class AnswerService {

  constructor(private messageService: MessageService) { }

  verifyAnswer(exercise_id: number, test_id: number, proposition: string): boolean {

    this.messageService.add('AnswerService: fetched answer id=${exercise_id}');
    let _answer: Answer = ANSWERS.find(answer => answer.exercise_id === exercise_id);

    console.log('Answer service for "' + proposition + '" : ')
    console.log(test_id);
    console.log(_answer !== undefined
      && _answer.regex_validations[test_id] !== undefined 
      && _answer.regex_validations[test_id] !== null 
      && proposition.match(_answer.regex_validations[test_id]) !== null);

    return _answer !== undefined
      && _answer.regex_validations[test_id] !== undefined 
      && _answer.regex_validations[test_id] !== null 
      && proposition.match(_answer.regex_validations[test_id]) !== null;
  }
}