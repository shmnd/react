import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ReactDOM from 'react-dom/client';
// import Counter from './counter';
// import Counter2 from './Counter2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
      {/* <Counter2  /> */}
    <App /> {/* counter by refernce */}

  </React.StrictMode>
);
