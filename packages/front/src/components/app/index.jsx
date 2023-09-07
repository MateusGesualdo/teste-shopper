import './index.css';
import { useState } from 'react';
import parser from "papaparse"
import Table from "../table/index.jsx"
import axios from "axios"

function App() {

  const [csvData, setCsvData] = useState([])
  const [validationData, setValidationData] = useState([])

  const handleFileChange = event => {
    setValidationData([])

    parser.parse(event.target.files[0], {
      header: true,
      complete: result => {
        setCsvData(result.data);
      }
    })
  }

  const getValidationData = async data => {
    try {
      const res = await axios.post(
        "http://localhost:3003/validate",
        csvData
      )

      setValidationData(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <div className="App App-header">

      <p>
        Carregue aqui seu arquivo CSV
      </p>

      <input
        type="file"
        name="file"
        accept='.csv'
        onChange={handleFileChange} />

      <button onClick={() => getValidationData(csvData)}>Validar</button>

      <Table data={validationData} />

      <button disabled>Atualizar</button>

    </div>
  );
}

export default App;
