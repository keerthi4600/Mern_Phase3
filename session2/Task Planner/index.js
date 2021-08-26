

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const tasks = require('./todo');

const argv = yargs.argv;

var command = argv._[0];
console.log('Running Command is :', command);

if (command === 'addTodo') {
	tasks.addTodo(argv.title);
} else if (command === 'deleteTodo') {
	var todoDeleted = tasks.deleteTodo(argv.title);
	var message = todoDeleted ?
		'Todo was deleted' : 'Todo can not found';
	console.log(message);
} else if (command === 'listAllTodos') {
	var allTodos = tasks.listAllTodos();
	console.log(`${allTodos.length} tasks available`);
	allTodos.forEach((todo) => tasks.logTodo(todo));
} else {
	console.log('It is a Invalid command.');
}
