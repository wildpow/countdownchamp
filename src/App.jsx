import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'May 4, 2018',
            newDeadline: '',
            goal: 'Countdown to Graduation'
        }
    }
    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    {this.state.goal} <br />{this.state.deadline}
                </div> 
                <Clock 
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl
                    className="Deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.changeDeadline()
                            }
                        }}
                    />
                    <Button onClick={() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>   
            </div>
        )
    }
}

export default App;