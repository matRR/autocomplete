import $ from 'jquery'; 
import getItems from './mock-server';

const $search = $('#search');
const $list   = $('#list');

$search.on('keyup', e => {
 const search = e.target.value;
 getItems(search)
  .then(data => {
    $list.empty();
    const $items = data.map(item => $('<li />').text(item));
    $list.append($items);
  });
});

