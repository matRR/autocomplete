import $ from 'jquery'; 
import getItems from './mock-server';

const $search = $('#search');
const $list   = $('#list');

$search.on('keyup', e => {
 // your code
});

getItems('test').then(console.log);