import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Chapter } from '../chapter';
import { CHAPTERS } from '../mock-chapters';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ChapterService {

  constructor(private messageService: MessageService) { }

  getChapter(id: number): Observable<Chapter> {

    this.messageService.add('ChapterService: fetched chapter id=${id}');
    return of(CHAPTERS.find(chapter => chapter.id === id));
  }

  getChapters(): Observable<Chapter[]> {
    this.messageService.add('ChapterService: fetched chapters');
    return of(CHAPTERS);
  }
}