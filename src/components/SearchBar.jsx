import { useState } from "react"

import Inputs from "./Inputs";




function SearchBar() {
 
  const [transactions,setTransaction] = useState([
    {id:1, Date: 2/3/2024, Description: 'movie',  Category:'Entertainment',Amount:2500},
    {id:2, Date: 2/3/2024, Description: 'movie',  Category:'Entertainment',Amount:2500},
    {id:3, Date: 2/3/2024, Description: 'movie',  Category:'Entertainment',Amount:2500},
    {id:4, Date: 2/3/2024, Description: 'movie',  Category:'Entertainment',Amount:2500}
  ])
  console.log(transactions)

  
  return (
    <div className='search' >
       <input 
       onChange={(e) => console.log(e.target.value)}
       type="text" 
       className='form-control' 
       placeholder="search your recent transactions" 
       aria-label="Recipient's username" 
       aria-describedby="button-addon2"/>
      <button 
      onClick={() => console.log('search')}
      type='submit'>
        search
        </button>

 
        <Inputs/>
    







    </div>
  )
}

export default SearchBar;