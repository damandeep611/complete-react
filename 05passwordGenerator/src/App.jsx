import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // the length is for settign the default length of the password generator
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [capitalAllowed, setCapitalAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // * useRef hook , this useref is for to show an effect when we copy the password to the clipboard
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (capitalAllowed) capital += "1234567890";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += ".[]{}()<>*+-=!?^$|";

    // now we will set a loop to select characters
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // * to copy the generated password to the clipboard
  const copyPasswordtoClipBoard = useCallback(() => {
    // to show an effect when we copy the password to the clipboard
    passwordRef.current?.select();
    // the following is a use case when u only want to copy certain number of values form the passwor d
    passwordRef.current?.setSelectionRange(0, 80);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-screen-md mx-auto shadow-md rounded-lg  p-4 my-10 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center p-2">PassWord Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden m-3">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full px-3 py-2"
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordtoClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={capitalAllowed}
              className="cursor-pointer"
              id="capInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="capInput">Capitalize</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
