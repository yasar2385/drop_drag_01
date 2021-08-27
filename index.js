// Import stylesheets
import './style.css';

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
    pull: function (to, from) {
      console.log(to.el.children, from.el.children)
      return from.el.children.length > 2 || 'clone';
    }
  },
  animation: 1000
});

Sortable.create(qux, {
  group: {
    name: 'qux',
    put: function (to) {
      console.log(to.el.children)
      return to.el.children.length < 4;
    }
  },
  animation: 1000
});