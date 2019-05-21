import template from '../src/todo-template.js';

const test = QUnit.test;
QUnit.module('template');

test('test to return html and competed as true', assert => {
    // Arrange
    const todo = {
        task: 'Buy 3-ply',
        completed: true
    };
    
    const expected = /*html*/`
    <li>
        <p>Buy 3-ply</p>
        <input class="checkbox" type="checkbox" name="completed" checked>
    </li>
    `;
    // Act
    const html = template(todo);

    // Assert
    assert.equal(html, expected);
});

test('test to return html and competed as false', assert => {
    // Arrange
    const todo = {
        
        task: 'Buy 3-ply',
        completed: false
    };
    const expected = /*html*/`
    <li>
        <p>Buy 3-ply</p>
        <input class="checkbox" type="checkbox" name="completed" >
    </li>
    `;
    // Act
    const html = template(todo);

    // Assert
    assert.equal(html, expected);
});