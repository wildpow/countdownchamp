import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline)
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time/ (1000 * 60 * 60 * 24));
        this.setState({days, hours, minutes, seconds});
        
    }

    render(){
        return (
            <Wrapper>
                <ClockDisplay>{this.leading0(this.state.days)} days</ClockDisplay>|
                <ClockDisplay>{this.leading0(this.state.hours)} hours</ClockDisplay>|
                <ClockDisplay>{this.leading0(this.state.minutes)} minutes</ClockDisplay>|
                <ClockDisplay>{this.leading0(this.state.seconds)} seconds</ClockDisplay>
            </Wrapper>
        )
    }
}
const ClockDisplay = styled.div`
    font-family: monospace;
    text-align: cetner;
    font-variant: small-caps;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default Clock;