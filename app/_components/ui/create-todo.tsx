import { createTodo } from '@/app/actions'

const CreateTodo = () => {
    return (
        <div>
            <form action={createTodo}>
                <input type='text' name='title' placeholder='Todo title' />
                <button type='submit' className='border-2'>Create</button>
            </form>
        </div>
    )
}

export default CreateTodo