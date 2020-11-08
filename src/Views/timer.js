
import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 10,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div id="timer-div">
                { minutes === 0 && seconds === 0
                    ? <h1 id="timer-txt2">Your order is ready</h1>
                    : <h3 id="timer-txt">Time Remaining: <h1 id="timer-count">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1></h3>
                }
            </div>
        )
    }
}