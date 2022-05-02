import './ExpenseDate.css';

function ExpenseDate(props){
    const day=props.expenseDate.toLocaleString('en-US',{day:'2-digit'});
    const month=props.expenseDate.toLocaleString('en-US',{month: 'long'});
    const year=props.expenseDate.getFullYear();
    return(
        <div className='expense-date'>
                <div className="expense-month">{month}</div>
                <div className="expense-year">{year}</div>
                <div className="expense-day">{day}</div>
            </div>
    )
}

export default ExpenseDate;