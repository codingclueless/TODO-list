import todo from '../data/todo-list-data.js';
import todoTemplate from '../src/todo-template.js';
import htmlToDom from '../src/html-to-dom.js';

const todoElement = document.getElementById('todo-list');

todo.forEach(todo => {
    const html = todoTemplate(todo);
    const dom = htmlToDom(html);
    todoElement.appendChild(dom);
});