import './index.css';
import { useState } from 'react';
import parser from "papaparse"
import Table from "../table/index.jsx"
import axios from "axios"

function App() {

  const [csvData, setCsvData] = useState([])
  const [validationData, setValidationData] = useState([])
  const [validationEnabled, setValidationEnabled] = useState(false)

  const handleFileChange = event => {
    setValidationData([])
    setValidationEnabled(false)

    parser.parse(event.target.files[0], {
      header: true,
      complete: result => {
        setCsvData(result.data);
      }
    })
  }

  const getValidationData = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3003/validate",
        csvData
      )

      setValidationData(res.data);
      setValidationEnabled(res.data.every(
        row => row.status === "Ok"
      ))
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  const updatePrices = async()=>{
    try {
      await axios.post(
        "http://localhost:3003/update",
        validationData
      )

      setValidationData([]);
      setValidationEnabled(false)
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

      <button onClick={getValidationData}>Validar</button>

      <Table data={validationData} />

      <button
        disabled={!validationEnabled}
        onClick={updatePrices}
      >Atualizar</button>

    </div>
  );
}

export default App;
