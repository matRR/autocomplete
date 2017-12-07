import $ from 'jquery';
import getItems from './mock-server';
import { window } from 'rxjs/operator/window';

const $search = $('#search');
const $list = $('#list');

// issues with previous code:
// - racing
// - 2. calling remote server with every keystroke
// - 3. calling remote server event if value is not changed, e.g. using up/down arrows inside input

let lastQuery = null;
let lastTimeout = null;
let nextQueryId = 0;

$search.on('keyup', e => {
  const search = e.target.value;

  // fixed .3
  if (search === lastQuery) {
    return;
  }
  lastQuery = search;

  // fixed .2
  if (lastTimeout) {
    window.clearTimeout(lastQuery);
  }

  let queryId = ++nextQueryId;

  lastTimeout = window.setTimeout(() => {

    getItems(search)
      .then(data => {
        
        // fixed .1
        if(queryId !== nextQueryId) {
          return;
        }
        //

        $list.empty();
        const $items = data.map(item => $('<li />').text(item));
        $list.append($items);

      });

  }, 500);

});

