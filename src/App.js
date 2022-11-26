// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './vendors/bootstrap.min.css'
import './vendors/fontawesome-free-6.2.1-web/css/all.min.css'
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/labs";
import Twitter from "./components/twitter/index";
import Lab from "./components/labs";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
              </Routes>
              <Routes>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
              </Routes>
              <Routes>
                  <Route path="/twitter"
                         exact={true}
                         element={<Twitter/>}/>
              </Routes>
              <Routes>
                  <Route path="/lab"
                         exact={true}
                         element={<Lab/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
