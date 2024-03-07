import classNames from 'classnames/bind';
import styles from './TodoForm.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function TodoForm({ handleAdd }) {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        task: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            ...formData,
            isEditing: false,
        };
        handleAdd(newTask);
        setFormData({
            title: '',
            date: '',
            task: '',
        });
    };

    return (
        <div className={cx('wrapper-fix')}>
            <form onSubmit={handleSubmit} className={cx('wrapper-addtask')}>
                <input
                    name="title"
                    onChange={handleChange}
                    className={cx('title')}
                    value={formData.title}
                    placeholder="Title task"
                />
                <input name="date" onChange={handleChange} value={formData.date} className={cx('date')} type="date" />
                <input
                    name="task"
                    onChange={handleChange}
                    value={formData.task}
                    className={cx('task')}
                    placeholder="Todo task"
                />
                <input className={cx('add-newtask')} type="submit" value="Add" />
            </form>
        </div>
    );
}

export default TodoForm;
