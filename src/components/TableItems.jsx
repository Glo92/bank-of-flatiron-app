

function TableItems({Date,Description,Category,Amount}) {
  return (
        <table>
  <tbody>
  <tr>
    <td>{Date}</td>
    <td>{Description}</td>
    <td>{Category}</td>
    <td>{Amount}</td>
  </tr>
  
  </tbody>
  </table>

  )
}

export default TableItems