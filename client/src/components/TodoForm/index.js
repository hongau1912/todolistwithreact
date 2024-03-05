import classNames from 'classnames/bind';
import styles from './TodoForm.module.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const cx = classNames.bind(styles);
function TodoForm({ addTodo }) {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        task: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const handleAddTask = () => {
        const newTask = {
            id: uuidv4(),
            ...formData,
            isEditing: false
        }
        addTodo(newTask)
        setFormData({
            title: '',
            date: '',
            task: ''
        })
    }

    return (
        <div className={cx('wrapper-fix')}>
            <div className={cx('wrapper-addtask')}>
                <input
                    name='title'
                    onChange={handleChange}
                    className={cx('title')}
                    value={formData.title}
                    placeholder="Title task"
                />
                <input name='date' onChange={handleChange} value={formData.date} className={cx('date')} type="date" />
                <input
                    name='task'
                    onChange={handleChange}
                    value={formData.task}
                    className={cx('task')}
                    placeholder="Todo task"
                />
                <input onClick={handleAddTask}  className={cx('add-newtask')} type="button" value="Add" />
            </div>
        </div>
    );
}

export default TodoForm;
