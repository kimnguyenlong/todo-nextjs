import { Todo } from '@/src/entities/todo'

interface Props {
    todo: Todo
}

const TodoCard = ({ todo }: Props) => {
    return (
        <div>
            <h3>{todo.title}: {todo.status}</h3>
        </div>
    )
}

export default TodoCard