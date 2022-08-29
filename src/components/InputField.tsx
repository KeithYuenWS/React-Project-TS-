import React, { useRef } from 'react';
import "./styles.css"

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = (props: Props) => {
    const {
        todo,
        setTodo,
        handleAdd
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent): void => {
        handleAdd(e)

        inputRef.current?.blur()
    }

    const handleOnChange = (e: React.FormEvent): void => {
        const target = e.target as HTMLInputElement

        setTodo(target.value)
    }

    
    return (
        <form className='input' onSubmit={handleSubmit}>
            <input 
                ref={inputRef}
                type="input" 
                placeholder='Enter a task' 
                className='input_box' 
                value={todo}
                onChange={
                    // (e => setTodo(e.target.value))
                    handleOnChange
                }
            />
            <button className='input_submit' type="submit">Go</button>
        </form>
    );
}

export default InputField;