import './index.css';
import { useState } from 'react';
import parser from "papaparse"
import Table from "../table/index.jsx"


function App() {

  const [scvData, setCsvData] = useState([])

  const handleFileChange = event => {
    parser.parse(event.target.files[0], {
      header: true,
      complete: result => {
        setCsvData(result.data);
      }
    })
  }

  return (
    <div className="App App-header">

      <input
        type="file"
        name="file"
        accept='.csv'
        onChange={handleFileChange} />
      <p>
        Carregue aqui seu arquivo CSV
      </p>

      <Table data={scvData}/>
    </div>
  );
}

export default App;
