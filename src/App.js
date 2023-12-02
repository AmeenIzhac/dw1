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
    <div>
      {/* Input box with onChange event */}
      <input type="text" onChange={handleInputChange} />

      {/* <p> tag whose text content is dynamically updated */}
      <p>{text}</p>
    </div>
  );
};

export default App;
