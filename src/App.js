import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 50,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 49999.99,
    date: new Date(2021, 2, 11),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 10500,
    date: new Date(2021, 4, 7),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 5000,
    date: new Date(2021, 3, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
