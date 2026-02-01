import { useState } from "react";

function Prac1() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <>
    <p>hello im</p>
     <input type="text" value="Raj" />
      {/* <button onClick={() => count + 1}>
  Fake Increment
</button> */}
    </>
  );
}

export default Prac1;
