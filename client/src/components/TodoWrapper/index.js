import classNames from 'classnames/bind';
import styles from './TodoWrapper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import TodoForm from '../TodoForm';
import EditTodoForm from '../EditTodoForm';
import Todo from '../Todo';

const cx = classNames.bind(styles);
function TodoWrapper() {
    const [showForm, setShowForm] = useState(false);
    const [listTask, setListTask] = useState([]);

    // handle show addtask
    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    // posttask api
    const handleAdd = async (course) => {
        try {
            let response = await fetch('/createtask', {
                method: 'POST',
                body: JSON.stringify({
                    ...course,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            let data = await response.json();
            setListTask([...listTask, { ...data }]);
            setShowForm(!showForm);
        } catch (error) {}
    };

    // gettask api
    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('/readtask');
            const data = await response.json();
            setListTask(data);
        };
        fetchPost();
    }, []);

    // updatetask api

    const handleEdit = async (_id) => {
        let response = await fetch(`/updatetask/${_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isEditing: true,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let data = await response.json();
        setListTask(listTask.map((list) => (list._id === _id ? { ...data } : list)));
    };

    const editTask = async (values, _id) => {
        let response = await fetch(`/updatetask/${_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...values,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let data = await response.json();
        setListTask(listTask.map((list) => (list._id === _id ? { ...data } : list)));
    };

    // deletetask api

    const handleDelete = async (_id) => {
        let response = await fetch(`/deletetask/${_id}`, {
            method: 'DELETE',
        });
        if (response.status === 200) {
            setListTask(listTask.filter((list) => list._id !== _id));
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('todo')}>TODO APP</div>
            <div onClick={handleShowForm} className={cx('wrapper-showadd')}>
                <span>Add New Task</span>
                <button className={cx('add')}>
                    <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                </button>
            </div>
            {showForm ? <TodoForm handleAdd={handleAdd} /> : ''}
            <div className={cx('todo-task')}>Task</div>
            {listTask.map((list, index) => (
                <div key={index} className={cx('wrapper-showtask')}>
                    {list.isEditing ? (
                        <EditTodoForm editTask={editTask} list={list} />
                    ) : (
                        <Todo task={list} handleDelete={handleDelete} handleEdit={handleEdit} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default TodoWrapper;
