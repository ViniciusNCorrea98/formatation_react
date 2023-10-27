import {useState} from 'react';
import{DivEtiquetas} from './styled'

function App() {
  const [cliente, setCliente] = useState({
    nome:"", email: "", cpf:""
  })

  const [listaCliente, setListaCliente] = useState([])

  function cadCliente(e){
    setCliente({...cliente, [e.target.name]: e.target.value})
  }

  function inserirCliente(e){
    e.preventDefault()
    setListaCliente([...listaCliente, cliente])
  }
  return (
    <DivEtiquetas>
      <form onSubmit={inserirCliente}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label>Nome: 
            <input type='text' name='nome' value={cliente.nome} onChange={cadCliente}/>
          </label>
          <label>E-mail: 
            <input type='text' name='email' value={cliente.email} onChange={cadCliente}/>
          </label>
          <label>cpf: 
            <input type='text' name='cpf' value={cliente.cpf} onChange={cadCliente}/>
          </label>
          <button type='submit'>Criar</button>
        </fieldset>
      </form>
      <div className='painel'>
        {listaCliente.map((cli, index) => 
          <div className='etiqueta' key={index}>
            <p>Nome: {cli.nome}</p>
            <p>E-mail: {cli.email}</p>
            <p>cpf: {cli.cpf}</p>
          </div>
          )
        }
      </div>
    </DivEtiquetas>
    
  );
}

export default App;
