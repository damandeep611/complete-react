import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <h1 className="bg-green-600 p-2 text-black m-4 rounded-xl">
          This is a tailwind test
        </h1>
      </div>
      <Card username="martian" btnText="Mars" />
      <Card username="sun" btnText="sun" />
    </>
  );
}

export default App;
