import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DetailsFilterService {

  private filterSource = new BehaviorSubject({
    category: null,
    labels: [],
    problem: null,
    filterByNew: false,
    warningHelpMsg: null,
    show: false
  });
  currentFilter = this.filterSource.asObservable();

  constructor() {
  }

  setFilter(newFilter: any) {
    this.filterSource.next(newFilter);
  }

}
