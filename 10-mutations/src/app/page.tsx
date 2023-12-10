
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"


import {Button} from 'primereact/button';

export const revalidate = 0

export default function Home() {

  return (
    <>
      <AddTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </>
  )
}
