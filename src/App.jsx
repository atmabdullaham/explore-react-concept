import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  );
}
function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Majed", age: 12 };
  return (
    <h3>
      {" "}
      I am {person.name} with age {age + money}{" "}
    </h3>
  );
}

function Student() {
  return (
    <>
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </>
  );
}

export default App;
