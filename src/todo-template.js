function todoTemplate(todo) {
    let checked = '';
    if(todo.completed) {
        checked = 'checked';
    }
    const html = /*html*/`
    <li class="todo">
        <p>${todo.task}</p>
        <input class="checkbox" type="checkbox" name="completed" ${checked}>
    </li>
    `;
    return html;
}


export default todoTemplate;