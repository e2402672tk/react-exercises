import { Counter } from "./components/counter";

function App() {

  let age: number;
  age = 25;

  interface Person {
    name: string;
    age: number;
  }

  const tee_kay: Person = {
    name: "TK",
    age: 14
  }


  return (
    <>
      <h1 className="bg-orange-500 text-5xl p-4)">Testing</h1>
      <p className="bg-pink-700">Testing again</p>
      <p>{age} and lets also name this person {tee_kay.name}</p>
      <Counter/>
    </>
  )
}
export default App
