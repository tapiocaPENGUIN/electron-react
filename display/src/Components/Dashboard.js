import React, {Component} from 'react';


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={value: this.props.state}
    }
        
    
    render() {
        return (
            <h1>Welcome to the Dashboard {this.state.value}</h1>
            
                
                
                
            
            );
    }
}

export default Dashboard;