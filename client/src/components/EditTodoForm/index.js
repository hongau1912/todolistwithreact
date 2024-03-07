import classNames from 'classnames/bind';
import styles from './EditTodoForm.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function EditTodoForm({ editTask, list }) {

    const [editFormData, setEditFormData] = useState({
        title: list.title,
        date: list.date,
        task: list.task
    })

    const handleEditChange = (e) => {
        const {name, value} = e.target
        setEditFormData({
            ...editFormData,
            [name]: value
        })
    }

    const handleUpdate = () => {
        const values = {
            ...editFormData,
            isEditing: false
        }
        editTask(values, list._id)
    }

    return (
        <>
            <input
                name='title'
                onChange={handleEditChange}
                value={editFormData.title}
                className={cx('showtask-title')}
                placeholder="UpdateTitle task"
            />
            <input
                name='date'
                onChange={handleEditChange} 
                value={editFormData.date} 
                className={cx('showtask-date')} 
                type="date" />
            <input
                name='task'
                onChange={handleEditChange}
                value={editFormData.task}
                className={cx('showtask-todo')}
                placeholder=" Up Todo task"
            />
            <input onClick={handleUpdate} className={cx('showtask-update')} type="button" value="Update" />
        </>
    );
}

export default EditTodoForm;
