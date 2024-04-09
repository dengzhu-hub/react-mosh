interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface ExpenseProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}
const ExpenseList = ({ expenses, onDeleteExpense }: ExpenseProps) => {
  if (expenses.length > 0)
    return (
      <table className="table table-bordered align-middle">
        <thead>
          <tr>
            <th>description</th>
            <th>amount</th>
            <th>amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => acc + expense.amount, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
};

export default ExpenseList;
