import { ChangeEvent, useState } from "react";

function TodoList() {

    const [taskList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>('');

    const addTask = () => {
        if (task.trim() === '') return;

        setTaskList([...taskList, task]);
        setTask('');
    }

    return (
        <>
            <input
                type="text"
                value={task}
                placeholder="Введите задачу"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} />
            <button onClick={addTask}>Добавить задачу</button>

            <ul>{taskList.map((task, index) => (
                <li key={index}>{task}</li>
            ))}</ul>
        </>
    );
}

export default TodoList;