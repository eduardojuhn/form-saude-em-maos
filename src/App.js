import './App.css';
import {Index} from "./pages/Index";
import img from './img/logo.png';

function App() {
  return (
    <div className="App">
          <nav className="header flex items-center justify-between flex-wrap p-6">
              <div className="App-logo flex items-center flex-shrink-0 text-white mr-6">

                  <a href='#'><img src={img}></img></a>
              </div>
          </nav>
        <div class="flex justify-center my-10 w-full">
            <Index />
        </div>

    </div>
  );
}

export default App;
