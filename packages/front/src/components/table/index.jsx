import "./index.css"

function Table(props) {

  if (!props.data[0]) return <></>

  const keys = Object.keys(props.data[0])

  return <table>
    <thead>
      <tr>
        {keys.map(
          (key, i) => <th key={i}>{key}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {props.data.map(
        (row, i) => <tr key={i}>
          {keys.map(
            (key, j) => <td key={j}>{row[key]}</td>
          )}
        </tr>
      )}
    </tbody>
  </table>
}

export default Table;
