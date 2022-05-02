import { div } from 'prelude-ls';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    return(
        <div className='expenses-list'>
            <ExpenseItem expenseDate={props.expense_list[0].date}  expenseTitle={props.expense_list[0].title}  expenseAmount={props.expense_list[0].amount}></ExpenseItem>
            <ExpenseItem expenseDate={props.expense_list[1].date}  expenseTitle={props.expense_list[1].title}  expenseAmount={props.expense_list[1].amount}></ExpenseItem>
            <ExpenseItem expenseDate={props.expense_list[2].date}  expenseTitle={props.expense_list[2].title}  expenseAmount={props.expense_list[2].amount}></ExpenseItem>
            <ExpenseItem expenseDate={props.expense_list[3].date}  expenseTitle={props.expense_list[3].title}  expenseAmount={props.expense_list[3].amount}></ExpenseItem>


        </div>

    );
    

}

export default Expenses;