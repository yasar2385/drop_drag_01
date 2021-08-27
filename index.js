// Import stylesheets
import './style.css';
// Default SortableJS
//import Sortable from 'sortablejs';

// Core SortableJS (without default plugins)
import { AutoScroll } from 'sortablejs/modular/sortable.core.esm.js';

// Complete SortableJS (with all plugins)
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
// Cherrypick extra plugins
// import Sortable, { MultiDrag, Swap, AutoScroll } from 'sortablejs';

// Sortable.mount(new MultiDrag(), new Swap());

// Cherrypick default plugins
// import Sortable, { AutoScroll } from 'sortablejs/modular/sortable.core.esm.js';

//Sortable.mount(new AutoScroll());

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

Sortable.create(foo, {
  group: 'foo',
  animation: 1000
});

Sortable.create(bar, {
  group: {
    name: 'bar',
    put: 'qux',
    pull: function(to, from) {
      console.log(to.el.children, from.el.children);
      return from.el.children.length > 2 || 'clone';
    }
  },
  animation: 1000
});

Sortable.create(qux, {
  group: {
    name: 'qux',
    put: function(to) {
      console.log(to.el.children);
      return to.el.children.length < 4;
    }
  },
  animation: 1000
});
