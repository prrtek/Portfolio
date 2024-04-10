import { useState } from "react";

import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-[#f5f5f7] '>
      <Home />
    </div>
  );
}

export default App;
