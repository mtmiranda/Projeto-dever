import React, { Component } from "react";
import { Form, FormInput, Button } from "../../styles/loginStyles";

//Importação da rota
import { Link } from 'react-router-dom';


class Login extends Component<{}, { matricula: string, password: string, error:string}> {
    constructor() {
        super(arguments);

        this.state = {
          matricula: "",
          password: "",  
          error: "",
        }; 
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleMatricChange = this.handleMatricChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() {
        this.setState({ error: "" });
      }
     
      handleSubmit(evt:any) {
        evt.preventDefault();
    
        if (!this.state.matricula) {
          return this.setState({ error: "Matrícula obrigatória" });
        }
    
        if (!this.state.password) {
          return this.setState({ error: "Senha obrigatória" });
        }
    
        return this.setState({ error: "" });
      }
    
      handleMatricChange(evt:any) {
        this.setState({
          matricula: evt.target.value,
        });
        console.log(evt.target.value);
      }
    
      handlePassChange(evt:any) {
        this.setState({
          password: evt.target.value,
        });
        console.log(evt.target.value);
      }
    
      render() {
    
    return(

        <div className="page-login">
            <Form onSubmit={this.handleSubmit}>
            {this.state.error && (
                <h2 onClick={this.dismissError}>
                    <button onClick={this.dismissError}>✖</button>
                    {this.state.error}
                </h2>
            )}

            <label>Matricula</label>
            <FormInput
                type="text"
                data-test="username"
                value={this.state.matricula}
                onChange={this.handleMatricChange.bind(this)}
            />

            <label>Senha</label>
            <FormInput
                type="password"
                value={this.state.password}
                onChange={this.handlePassChange.bind(this)}
            />

            <Button type="submit">
                Entrar
            </Button>

            </Form>
        
        <Link to="/Home">
            Ir para Home
        </Link>

        </div>
        
        ); 
 
     }  
}
export default Login;