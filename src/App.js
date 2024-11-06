import './App.css'
import Expenses from "./Components/Expenses";



function App() {


  let expense=[
  {
  expenseDate:new Date(2024,0,28),
   expensename:'College Fee',
  expenseAmount:'$300'
  },
  {
    expenseDate:new Date(2024,1,24),
   expensename:'Rent Payment',
  expenseAmount:'$200'

  },

  {
    expenseDate:new Date(2024,10,6),
   expensename:'Buy clothes',
  expenseAmount:'$100'

  }


  ];


  return (
    <div>
      <h1>Expense Tracker</h1>
      <Expenses item={expense}/>
  



  </div>

  

  );
  
}


export default App;

