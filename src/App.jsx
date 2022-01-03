import logo from './logo.svg';
import './App.css';
import { AddRecipe } from './components/addRecipe';
import { GetRecipe } from './components/getRecipe';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='addRecipe'>
          <AddRecipe />
        </div>
        <div>
          <GetRecipe/>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
