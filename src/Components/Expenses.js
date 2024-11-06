import './Expenses.css'

import ExpenseItem from './ExpenseItem';

function Expenses(props){
    return(
        <div className="expenses">
<ExpenseItem 
  date={props.item[0].expenseDate} 
  name={props.item[0].expensename} 
  amount={props.item[0].expenseAmount}/>

<ExpenseItem 
  date={props.item[1].expenseDate} 
  name={props.item[1].expensename} 
  amount={props.item[1].expenseAmount}/>

<ExpenseItem 
  date={props.item[2].expenseDate} 
  name={props.item[2].expensename} 
  amount={props.item[2].expenseAmount}/>

</div>
   
    );

}

export default Expenses;

