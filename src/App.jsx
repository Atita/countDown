import React, { Component } from 'react';
import Clock from './Clock'
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
        deadline:'December 25,2018',
        newDeadline:''
    }
   
}

changeDeadline() {

    if (this.state.newDeadline === '' ) {
// to do: bulletproof date data entry
//|| Object.prototype.toString.call(this.state.newDeadline) != '[object Date]'

        alert ('You should enter a date')
    } else {
    this.setState({deadline:this.state.newDeadline});
    }
    let frm=document.getElementsByClassName('Deadline-Input');
    frm.value='';
    return false;

}

    render() {
        return(
    <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
            <div>
              <Clock deadline={this.state.deadline}/>
            </div>
            <Form inline> 
                <FormControl className='Deadline-Input' placeholder="new date" onChange={event=>this.setState({newDeadline:event.target.value})}/>
                <Button onClick={()=>this.changeDeadline()}>Submit</Button> 
            </Form>
            </div>
    );
        
    }
}
export default App;