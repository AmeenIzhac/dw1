import React, { useState } from 'react';

const App = () => {
  // State to store the input box value
  const [inputValue, setInputValue] = useState('');
  const [text, setText] = useState('');

  // Function to update the state when input changes
  const handleInputChange = (event) => {
    if (parseInt(event.target.value) == 12) {
      setText("you can get the reward from x office");
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
