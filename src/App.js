import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 3659.23,
    date: new Date(2023, 2, 28)
  },
  {
    id: 'e2',
    title: 'Bike Insurance',
    amount: 350.23,
    date: new Date(2023, 6, 5)
  }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES) 

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
