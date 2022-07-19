import React, { useState } from "react";
import "./TodoContainer.scss"
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const TodoContainer = () => {
	const [list, setList] = useState([]);
	const handleAddItem = addItem => {
		setList([...list, addItem]); 
	};
	return (
		<div>
			<FormTodo handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default TodoContainer;