import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';
//import { Button } from 'react-native'

const url_alunos = 'https://aeroclub-backend.herokuapp.com/api/Alunos'
const url_instrutor = 'https://aeroclub-backend.herokuapp.com/api/Intrutores'

class Obter_Instrutor extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){
    //axios.get()
  }

  render(){
    return(
    <Button
    //Cadastrar Instrutor
    onClick = {()=> this.handleClick}
    >
    Obter Instrutor
    </Button>
     );
  }
}


class Obter_Aluno extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){
//    axios.get(url_alunos)
  }

  render(){
    return(
    <Button
    //Cadastrar Instrutor
    onClick = {()=> this.handleClick}
    >
    Obter Aluno
    </Button>
     );
  }
}


class Criar_Instrutor extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){
    //axios.get()
  }

  render(){
    return(
    <Button
    //Cadastrar Instrutor
    onClick = {()=> this.handleClick}
    >
    Criar Instrutor
    </Button>
     );
  }
}


class Criar_Aluno extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){
    //axios.get()
  }

  render(){
    return(
    <Button
    //Cadastrar Instrutor
    onClick = {()=> this.handleClick}
    >
    Criar Aluno
    </Button>
     );
  }
}





class Tela extends React.Component{


constructor(props) {
  super(props)
}

renderBotaoAluno() {
  return (
    <Obter_Aluno />
  );
}

renderBotao_Instrutor() {
  return(
    <Obter_Instrutor />
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
