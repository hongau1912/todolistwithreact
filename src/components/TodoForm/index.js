import classNames from 'classnames/bind';
import styles from './TodoForm.module.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const cx = classNames.bind(styles);
function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        const values = {
            id: uuidv4(),
            title,
            date,
            task,
            isEditing: false,
        };
        addTodo(values);
        setTitle('');
        setDate('');
        setTask('');
    };
    return (
        <div className={cx('wrapper-fix')}>
            <div className={cx('wrapper-addtask')}>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={cx('title')}
                    placeholder="Title task"
                />
                <input onChange={(e) => setDate(e.target.value)} value={date} className={cx('date')} type="date" />
                <input
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className={cx('task')}
                    placeholder="Todo task"
                />
                <input onClick={handleAddTask} className={cx('add-newtask')} type="button" value="Add" />
            </div>
        </div>
    );
}

export default TodoForm;
