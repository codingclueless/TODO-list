import todo from '../data/todo-list-data.js';
import template from '../src/todo-template.js';
import htmlToDom from '../src/todo-template.js';

const listElement = document.getElementById('todo-list');

todo.forEach(todo => {
    const html = template(todo);
    const dom = htmlToDom(html);
    listElement.appendChild(dom);
});