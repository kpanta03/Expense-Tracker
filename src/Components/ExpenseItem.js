import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';




function ExpenseItem(props){
    
   
    return(


        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item-description'>
                <h2>{props.name}</h2>
                <div className='expense-item-price'>{props.amount}</div>
                
            </div>
        </div>

    );

}
export default ExpenseItem;

