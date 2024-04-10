import { useState } from 'react';
import './App.css';
import ExpendFilter from './components/ExpendFilter';

import ExpenseList from './ExpenseList';
import ExpenseForm, { ExpenseFormData } from './components/Form/Form';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Rent',
      amount: 100,
      category: 'jonas',
    },
    {
      id: 2,
      description: 'Groceries',
      amount: 50,
      category: 'jack',
    },
    {
      id: 3,
      description: 'Utilities',
      amount: 150,
      category: 'james',
    },
    {
      id: 4,
      description: 'Gas',
      amount: 30,
      category: 'jonas',
    },
    {
      id: 5,
      description: 'Dining out',
      amount: 80,
      category: 'jack',
    },
    {
      id: 6,
      description: 'Entertainment',
      amount: 120,
      category: 'james',
    },
    {
      id: 7,
      description: 'Shopping',
      amount: 70,
      category: 'jonas',
    },
    {
      id: 8,
      description: 'Transportation',
      amount: 40,
      category: 'jack',
    },
  ]);
  const handleAddExpense = (expense: ExpenseFormData) => {
    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        description: expense.desc,
        amount: expense.amount,
        category: expense.categories,
      },
    ]);
  };
  const visibleExpense = selectedCategory
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses;
  return (
    <>
      <ExpenseForm onSubmit={expense => handleAddExpense(expense)} />
      <ExpendFilter
        onSelectCategory={category => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpense}
        onDeleteExpense={id =>
          setExpenses(expenses.filter(expense => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
