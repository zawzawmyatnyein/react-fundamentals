// const smallBox = (
//   <div className="box box--small" style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}>
//     small lightblue box
//   </div>
// );
// const mediumBox = (
//   <div className="box box--medium" style={{ fontStyle: 'italic', backgroundColor: 'pink' }}>
//     medium pink box
//   </div>
// );
// const largeBox = (
//   <div className="box box--large" style={{ fontStyle: 'italic', backgroundColor: 'orange' }}>
//     large orange box
//   </div>
// );

import { useRef, useState } from 'react';

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   );
// }

// function Box({ style, className = '', ...otherProps }) {
//   return <div className={`box ${className}`} style={{ fontStyle: 'italic', ...style }} {...otherProps} />;
// }

// function App() {
//   return (
//     <div>
//       <Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
//         small lightblue box
//       </Box>
//       <Box className="box--medium" style={{ backgroundColor: 'pink' }}>
//         medium pink box
//       </Box>
//       <Box className="box--large" style={{ backgroundColor: 'orange' }}>
//         large orange box
//       </Box>
//     </div>
//   );
// }

// function Box({ style, size, ...otherProps }) {
//   const sizeClassName = size ? `box--${size}` : '';

//   return <div className={`box ${sizeClassName}`} style={{ fontStyle: 'italic', ...style }} {...otherProps} />;
// }

// function App() {
//   return (
//     <div>
//       <Box size="small" style={{ backgroundColor: 'lightblue' }}>
//         small lightblue box
//       </Box>
//       <Box size="medium" style={{ backgroundColor: 'pink' }}>
//         medium pink box
//       </Box>
//       <Box size="large" style={{ backgroundColor: 'orange' }}>
//         large orange box
//       </Box>
//     </div>
//   );
// }

// Basic Forms
// function UsernameForm({ onSubmitUsername }) {
//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(event.target.elements.usernameInput.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// Using refs
// function UsernameForm({ onSubmitUsername }) {
//   const usernameInputRef = useRef();

//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(usernameInputRef.current.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" ref={usernameInputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// Dynamic forms using useState
// validate lower-case
// function UsernameForm({ onSubmitUsername }) {
//   const [error, setError] = useState(null);

//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(event.target.elements.usernameInput.value);
//   }

//   function handleChange(event) {
//     const { value } = event.target;
//     const isLowercase = value === value.toLowerCase();
//     setError(isLowercase ? null : 'Username must be lower case');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" onChange={handleChange} />
//       </div>
//       <div role="alert" style={{ color: 'red' }}>
//         {error}
//       </div>
//       <button disabled={Boolean(error)} type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// Controlled Form
// control the input value
function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = useState('hello world');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
