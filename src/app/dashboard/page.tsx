"use client"

import Todos from "./Todos"

const Dashboard = () => {
  return (
    <main className="text-lg my-12">
        <h2 className="text-xl text-center">Your Todos ~</h2>
        <form className="text-center justify-center my-10 flex gap-2">
            <input className="text-black px-1 focus:outline-none text-base" name="todo" placeholder="Todo" type="text" minLength={1} />
            <button className="bg-gray-200 text-base p-1 text-black active:bg-gray-300">Add Todo</button>
        </form>

        <Todos/>

    </main>
  )
}
export default Dashboard