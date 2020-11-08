
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
                    ? <h2 id="timer-txt">Håper det smaker!</h2>
                    : <h2 id="timer-txt">Vi kommer til ditt bord om: <h2 id="timer-count">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2></h2>
                }
            </div>
        )
    }
}