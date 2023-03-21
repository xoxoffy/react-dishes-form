import { Container } from '@mui/material';
import './App.css';
import DishesForm from './components/DishesForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Dish Form</h1>
      </header>
      <Container maxWidth="sm">
        <DishesForm />
      </Container>
    </div>
  );
}

export default App;
