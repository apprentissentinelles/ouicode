import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Exercise } from '../exercise';
import { EXERCISES } from '../mock-exercises';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  constructor(private messageService: MessageService) {}

  getExercises(chapter_id : number): Observable<Exercise[]> {
    this.messageService.add('ExerciseService: fetched exercises');
    return of(EXERCISES);
  }
}