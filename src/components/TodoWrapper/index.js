import classNames from 'classnames/bind';
import styles from './TodoWrapper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TodoForm from '../TodoForm';
import EditTodoForm from '../EditTodoForm';
import Todo from '../Todo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const cx = classNames.bind(styles);
function TodoWrapper() {
    const [showForm, setShowForm] = useState(false);
    const [listTask, setListTask] = useState([]);
    const handleShowForm = () => {
        setShowForm(!showForm);
    };
    const addTodo = (values) => {
        setListTask([...listTask, { ...values }]);
    };
    const handleDelete = (id) => {
        setListTask(listTask.filter((list) => list.id !== id));
    };
    const handleEdit = (id) => {
        setListTask(listTask.map((list) => (list.id === id ? { ...list, isEditing: !list.isEditing } : list)));
    };
    const editTask = (values, id) => {
        setListTask(listTask.map((list) => list.id === id ? {...list, ...values, isEditing : !list.isEditing} : list))
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('todo')}>TODO APP</div>
            <div onClick={handleShowForm} className={cx('wrapper-showadd')}>
                <span>Add New Task</span>
                <button className={cx('add')}>
                    <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                </button>
            </div>
            {showForm ? <TodoForm addTodo={addTodo} /> : ''}
            <div className={cx('todo-task')}>Task</div>
            {listTask.map((list, index) => (
                <div key={index} className={cx('wrapper-showtask')}>
                    {list.isEditing ? (
                        <EditTodoForm editTask={editTask}  list={list} />
                    ) : (
                        <Todo task={list} handleDelete={handleDelete} handleEdit={handleEdit} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default TodoWrapper;
