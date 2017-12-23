import React, { Component } from 'react';
import Clock from './Clock';
import styled from 'styled-components';
import img from './AWS-Lambda.png';

const Wrapper = styled.div`
  text-align: center;
  font-size: 35px;
  background: url(${img}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: black;
`
const Title = styled.div`
  padding-top: 200px;
  padding-bottom: 100px;
  font-size: 50px;
`
const Input = styled.input`
    font-size: 25px;
    margin: 5px;
    text-align: center;
    color: black;
` 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'May 4, 2018',
      newDeadline: '',
      goal: 'Countdown to Graduation'
    }
  }
  changeDeadline = (event) => {
    event.preventDefault();
    this.setState({
      deadline: this.state.newDeadline,
      newDeadline: ''
    });
  }
  changeNewDeadline = (event) => {
    this.setState({ newDeadline: event.target.value });
  }

  render() {
    return (
      <Wrapper>
        <Title>
          {this.state.goal} <br />{this.state.deadline}
        </Title> 
        <Clock deadline={this.state.deadline}/>
          <form onSubmit={this.changeDeadline}>
            <Input
              value={this.state.newDeadline}
              className="Deadline-input"
              placeholder='new date'
              onChange={this.changeNewDeadline}
            />
          </form>   
        </Wrapper>
    )
  }
}
 // <button onClick={() => this.changeDeadline()}>
            //   Submit
            // </button>

            // onKeyPress={event => {
            //   if (event.key === 'Enter') {
            //     this.changeDeadline()
            //   }
            // }}
export default App;