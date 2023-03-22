import './App.css';
import DishesForm from './components/DishForm/DishesForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Dish Form</h1>
      </header>
      <section>
        <DishesForm />
      </section>
    </div>
  );
}

export default App;
