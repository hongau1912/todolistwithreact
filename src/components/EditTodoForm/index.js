import classNames from 'classnames/bind';
import styles from './EditTodoForm.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function EditTodoForm({ editTask, list }) {
    const [title, setTitle] = useState(list.title);
    const [date, setDate] = useState(list.date);
    const [task, setTask] = useState(list.task);
    const handleAddTask = () => {
        const values = {
            title,
            date,
            task,
            isEditing: false,
        };
        editTask(values, list.id);
    };
    return (
        <>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={cx('showtask-title')}
                placeholder="UpdateTitle task"
            />
            <input onChange={(e) => setDate(e.target.value)} value={date} className={cx('showtask-date')} type="date" />
            <input
                onChange={(e) => setTask(e.target.value)}
                value={task}
                className={cx('showtask-todo')}
                placeholder=" Up Todo task"
            />
            <input onClick={handleAddTask} className={cx('showtask-update')} type="button" value="Update" />
        </>
    );
}

export default EditTodoForm;
