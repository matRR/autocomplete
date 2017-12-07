import $ from 'jquery';
import Rx from 'rxjs/Rx';

import getItems from './mock-server';

const $search = $('#search');
const $list = $('#list');

Rx.Observable.fromEvent($search, 'keyup')
  .map(e => e.target.value) // transform jQuery events to input text
  .distinctUntilChanged() // operator that produces value only if the prev values has changed
  .debounceTime(250) // operator that limits produces values to only one value per give time period
  .switchMap(search => getItems(search)) // passing promise to switchMap (flatMapLatest, discards old data) operator
  .subscribe(data => {
    $list.empty();
    const $items = data.map(item => $('<li />').text(item));
    $list.append($items);  
  });
