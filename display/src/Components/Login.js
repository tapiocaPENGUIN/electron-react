import React, {Component} from 'react';
import Dashboard from './Dashboard'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={value: true}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.value)
        this.setState({
            value: !this.state.value
        })
        
        
        
    }
    render() {
        if (this.state.value){
            return (
                <div>

                <h1>Please login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    
                    </form>
                    
                </div>
                );
        }
        else {
            return <Dashboard state = {this.state.value}/>
        }
        
    }
}

export default Login;