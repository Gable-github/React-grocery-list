import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import ExpenseFilter from "./components/ExpenseFilter";
import categories from "./components/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, name: "Milk", amount: 5, category: "Fruits" },
    { id: 2, name: "Beef", amount: 20, category: "Meats" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const onAddedData = (data) =>
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);

  return (
    <div>
      <div className="mb-3">
        <Form onSubmit={onAddedData} />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="mb-3">
        <Table
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </div>
    </div>
  );
}

export default App;
