import { useState } from "react";

type Task = {
    id: number;
    text: string;
    isDone: boolean;
};

function TasksList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = () => {
        if (newTask.trim() === '') return;

        const task: Task = {
            id: Date.now(),
            text: newTask,
            isDone: false,
        };
        setTasks(prev => [...prev, task]);
        setNewTask('');
    };

    const toggleTask = (id: number) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    return (
        <>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <input
                    type="text"
                    value={newTask}
                    placeholder="Введите задачу"
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{ flex: 1, padding: '4px' }}
                />
                <button onClick={addTask}>Добавить задачу</button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span
                            onClick={() => toggleTask(task.id)}
                            style={{
                                textDecoration: task.isDone ? 'line-through' : 'none',
                                color: task.isDone ? 'gray' : 'white',
                                cursor: 'pointer',
                                userSelect: 'none',
                                display: 'inline-block',
                                padding: '4px 0',
                            }}
                        >
                            {task.text}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TasksList;