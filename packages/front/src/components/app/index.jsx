import './index.css';
import { useState } from 'react';
import parser from "papaparse"
import Table from "../table/index.jsx"
import axios from "axios"

function App() {

  const [csvData, setCsvData] = useState([])
  const [validationData, setValidationData] = useState([])
  const [validationEnabled, setValidationEnabled] = useState(false)
  const [updateEnabled, setUpdateEnabled] = useState(false)
  const [message, setMessage] = useState("")

  const handleFileChange = event => {
    setValidationData([])
    setUpdateEnabled(false)

    parser.parse(event.target.files[0], {
      header: true,
      complete: result => {
        setCsvData(result.data);
        setValidationEnabled(result.data.length)
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
      setUpdateEnabled(res.data.every(
        row => row.status === "Ok"
      ))
    } catch (error) {
      setMessage(error.response.data.message);
    }
  }

  const updatePrices = async () => {
    try {
      await axios.post(
        "http://localhost:3003/update",
        validationData
      )

      setValidationData([]);
      setUpdateEnabled(false)
      setMessage("Preços atualizados!")

    } catch (error) {
      setMessage(error.response.data.message);
    }
  }

  return (
    <div className="App App-header">

      <h1>Teste Técnico - Shopper</h1>

      <p>Carregue aqui seu arquivo CSV</p>

      <input
        type="file"
        name="file"
        accept='.csv'
        onChange={handleFileChange} />

      <Table data={validationData} />

      <p>{message}</p>

      <div>

        <button
          disabled={!validationEnabled}
          onClick={getValidationData}
        >
          Validar
        </button>

        <button
          id="Update-Button"
          disabled={!updateEnabled}
          onClick={updatePrices}
        >
          Atualizar
        </button>

      </div>

    </div>
  );
}

export default App;
