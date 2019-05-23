import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
//import { Button } from 'react-native'
import axios from 'axios'


const url_alunos = 'https://aeroclub-backend.herokuapp.com/api/Alunos'
const url_instrutor = 'https://aeroclub-backend.herokuapp.com/api/Instrutores'

class Obter_Instrutores extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){
    console.log("click");
      axios.get(url_instrutor)
        .then(result => {
          console.log("Instrutores",result);
          const instrutores = result.data.data
            .map((item => {
                return item.nome;
            }))

            return instrutores;
        })
      }

  render(){
    return(
    <Button
    //Cadastrar Instrutor
    onClick = {()=> this.handleClick()}
    >
    Obter Instrutores
    </Button>
     );
  }
}


class Obter_Alunos extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){
    console.log("click");
    axios.get(url_alunos)
      .then(result => {
        console.log("Alunos",result);
        const alunos = result.data.data
          .map((item => {
              return item.nome
          }))

          return alunos
      })
  }

  render(){
    return(
    <Button
    onClick = {()=> this.handleClick()}
    >
    <Icon>
    account_box
    </Icon>
    <p>Obter Alunos</p>
    </Button>
     );
  }
}


class Criar_Instrutor extends React.Component {

  constructor(props){
    super(props)

  }

  handleClick(){
    //axios.post()
  }

  render(){
    return(
    <Button
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
    //axios.post()
  }

  render(){
    return(
    <Button
    onClick = {()=> this.handleClick()}
    >
    Criar Aluno
    </Button>
     );
  }
}



const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

// function Inputs(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.container}>
//       <Input
//         defaultValue="Hello world"
//         className={classes.input}
//         inputProps={{
//           'aria-label': 'Description',
//         }}
//       />
//
//       <Input
//         placeholder="Placeholder"
//         className={classes.input}
//         inputProps={{
//           'aria-label': 'Description',
//         }}
//       />
//
//       <Input
//         value="Disabled"
//         className={classes.input}
//         disabled
//         inputProps={{
//           'aria-label': 'Description',
//         }}
//       />
//
//       <Input
//         defaultValue="Error"
//         className={classes.input}
//         error
//         inputProps={{
//           'aria-label': 'Description',
//         }}
//       />
//     </div>
//   );
// }
//
// Inputs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(Inputs);
//



class Tela extends React.Component{


constructor(props) {
  super(props)
}

renderButtons() {
  return (
    <>
    <div class = 'menu'>
      <Obter_Alunos />
      <Criar_Aluno />
      <Obter_Instrutores />
      <Criar_Instrutor />
    </div>
    

    </>
  );
}

render(){
  return(
   this.renderButtons()
  );

}

}


ReactDOM.render(
  <Tela />,
  document.getElementById('root')
)
