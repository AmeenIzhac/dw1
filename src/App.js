import React, { useState } from 'react';

const App = () => {
  // State to store the input box value
  const [inputValue, setInputValue] = useState('');
  const [text, setText] = useState('');

  // Function to update the state when input changes
  const handleInputChange = (event) => {
    if (event.target.value == "229"
    || event.target.value == "2,2,9"
    || event.target.value == "2, 2, 9"
    || event.target.value == "2, 2, 9 "
    || event.target.value == "922"
    || event.target.value == "9,2,2"
    || event.target.value == "9, 2, 2"
    || event.target.value == "9, 2, 2 "
    ) {
      setText("Fantastic! Now just look for your gift in the Maths Office at Upper, behind: \"I stand tall with tales untold, lined with volumes, new and old\"");
    } else {
      setText("how have you still not figured it out?");
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"50vh"}}>
      {/* Input box with onChange event */}
      <h1>Took you long enough</h1>
      <input type="text" style={{width:"20vw", height:"5vh", padding: "0px 20px 0px 20px"}} onChange={handleInputChange} />

      {/* <p> tag whose text content is dynamically updated */}
      <p>{text}</p>
    </div>
  );
};

export default App;
