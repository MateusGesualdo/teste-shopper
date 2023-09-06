import "./index.css"

function Table(props) {

  if (!props.data[0]) return <></>

  const keys = Object.keys(props.data[0])
  console.log(keys);

  return <table>
    <thead>
      <tr>
        {keys.map(
          key => <th>{key}</th>
        )}
      </tr>
    </thead>
    <tbody>
      {props.data.map(
        row => <tr>
          {keys.map(
            key => <td>{row[key]}</td>
          )}
        </tr>
      )}
    </tbody>
  </table>
}

export default Table;
