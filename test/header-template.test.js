import headerTemplate from '../src/header-template.js';

const test = QUnit.test;
QUnit.module('header template');

test('create header template', assert => {
    // Arrange
    const expected = /*html*/`
    <header>
        <h1>To Do List</h1>
    </header>
    `;
    // Act
    const html = headerTemplate();

    // Assert
    assert.equal(html, expected);
});

