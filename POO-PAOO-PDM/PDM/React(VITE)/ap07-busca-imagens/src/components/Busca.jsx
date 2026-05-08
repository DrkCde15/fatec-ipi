// rcc
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends Component {

  
  state = {
    termoDeBusca: ''
  }
  onTermoAlterado = (evento) => {
    this.setState({termoDeBusca: evento.target.value})
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()
    //chamar a função que chegou via props, passando o valor da variável de estado como parâmetro. Dica: qualifique o props com this.
    this.props.onBuscaRealizada(this.state.termoDeBusca)

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          {/* componente de texto com ícone */}
          <IconField iconPosition='left'>
              <InputIcon className='pi pi-search' />
              <InputText 
                value={this.state.termoDeBusca}
                className='w-full'
                placeholder='O que deseja ver...?'
                onChange={this.onTermoAlterado}/>
          </IconField>
          <Button 
            label='OK'
            className='p-button-outlined mt-2'
          />
          {/* botão */}
        </div>
      </form>
    )
  }
}