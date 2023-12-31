import "./index.css"

function Table(props) {

  if (!props.data.length) return <></>

  const columns = [
    "product_code",
    "product_name",
    "current_price",
    "new_price",
    "status"
  ]

  return <table>
    <thead>
      <tr>
        {columns.map(
          (column, i) => <th key={i}>{column}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {props.data.map(
        (row, i) => <tr key={i}>
          {columns.map(
            (column, j) => <td key={j}>{row[column]}</td>
          )}
        </tr>
      )}
    </tbody>
  </table>
}

export default Table;
