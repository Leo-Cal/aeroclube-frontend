import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { Button } from 'react-native'


class Botao_Instrutor extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){

  }

  render(){
    return(
    <button
    //Cadastrar Instrutor
    onClick = {()=> this.handleClick}
    >
    Cadastrar Instrutor
    </button>
     );
  }
}


class Botao_Aluno extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){

  }

  render(){
    return(
    <button
    //Cadastrar Instrutor
    onClick = {()=> this.handleClick}
    >
    Cadastrar Aluno
    </button>
     );
  }
}

class Tela extends React.Component{


constructor(props) {
  super(props)
}

renderBotaoAluno() {
  return (
    <Botao_Aluno />
  );
}

renderBotao_Instrutor() {
  return(
    <Botao_Instrutor />
  )
}
render(){
  return(
   //this.renderBotaoAluno()
   this.renderBotao_Instrutor()
  );

}

}


ReactDOM.render(
  <Tela />,
  document.getElementById('root')
)
