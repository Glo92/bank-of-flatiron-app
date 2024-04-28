import Table from "./Table";

function Inputs() {
  return (
    <form>
    <div className='input-group'>
  <input type="date" placeholder='Date' className="form-control"/>
  <input onChange={(e) =>setTransaction(e.target.value)} type="text" placeholder='Description...' className="form-control"/>
  <input onChange={(e) =>setTransaction(e.target.value)} type="text" placeholder='Category...' className="form-control"/>
  <input onChange={(e) =>setTransaction(e.target.value)} type="number" placeholder='Amount..' className="form-control"/>
  </div>

  <button onClick={() => console.log('add')} className="btn btn-primary" type="button">add transaction</button>
      





      <Table/>
      
    </form>
  )
}
export default Inputs;
