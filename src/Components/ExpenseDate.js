import './ExpenseDate.css'




function ExpenseDate( props){
    const month= props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.getDate();
    const year=props.date.getFullYear();

    return(

        <div className='date'>
        {month}/{day}/{year}
        </div>
    );

}

export default ExpenseDate;


