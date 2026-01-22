import { deleteTodo, updateTodoStatus } from '@/app/actions'
import { getNextTodoStatus, getPrevTodoStatus, Todo } from '@/src/entities/todo'

interface Props {
    todo: Todo
}

const TodoCard = ({ todo }: Props) => {
    return (
        <div className='gap-2 p-2 flex flex-col'>
            <h3>{todo.title} ({todo.status})</h3>
            <p className='text-xs'>{todo.createdAt.toLocaleString()}</p>
            <div className='flex gap-4'>
                <form action={updateTodoStatus}>
                    <input type='hidden' name='id' value={todo.id} />
                    <input type='hidden' name='status' value={getPrevTodoStatus(todo.status)} />
                    <button type='submit' className='border-2'>Prev</button>
                </form>
                <form action={updateTodoStatus}>
                    <input type='hidden' name='id' value={todo.id} />
                    <input type='hidden' name='status' value={getNextTodoStatus(todo.status)} />
                    <button type='submit' className='border-2'>Next</button>
                </form>
                <form action={deleteTodo}>
                    <input type='hidden' name='id' value={todo.id} />
                    <button type='submit' className='border-2'>Delete</button>
                </form>
            </div>

        </div>
    )
}

export default TodoCard