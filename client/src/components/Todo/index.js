import classNames from 'classnames/bind';
import styles from './Todo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Todo({ task, handleDelete, handleEdit }) {
    return (
        <>
            <div className={cx('css-ptext')}>
                <p className={cx('p-showtask1')}>{task.title}</p>
                <p className={cx('p-showtask2')}>{task.date}</p>
                <p className={cx('p-showtask3')}>{task.task}</p>
            </div>
            <div className={cx('edit')}>
                <button>
                    <FontAwesomeIcon
                        onClick={() => handleEdit(task.id)}
                        className={cx('edit-icon')}
                        icon={faPenToSquare}
                    />
                </button>
                <button>
                    <FontAwesomeIcon
                        onClick={() => handleDelete(task.id)}
                        className={cx('edit-icon')}
                        icon={faTrashCan}
                    />
                </button>
            </div>
        </>
    );
}

export default Todo;
