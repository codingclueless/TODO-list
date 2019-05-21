import todo from '../data/todo-list-data.js';
import todoTemplate from '../src/todo-template.js';
import htmlToDom from '../src/html-to-dom.js';
import headerTemplate from '../src/header-template.js';

const todoElement = document.getElementById('todo-list');

const header = headerTemplate();
const headerDOM = htmlToDom(header);
document.body.prepend(headerDOM);

todo.forEach(todo => {
    const html = todoTemplate(todo);
    const dom = htmlToDom(html);
    todoElement.appendChild(dom);
});