import React, { Component } from 'react'
import SelectDifficulty from './Components/SelectDifficulty'
import SelectColors from './Components/SelectColors'
import ShowColors from './Components/ShowColors'
import Service from "../../helpers/Service"

export class Colors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            difficulty: null,
            colors: null
        }
    }

    changeStep = (value) => {
        this.setState({ step: value })
    }

    changeDifficulty = (value) => {
        this.setState({ difficulty: value })
        this.getColors();
    }

    teste = () => {
        console.log(this.state.step);
        this.changeState("step", 0);
        console.log(this.state.step);
    }

    getColors = () => {
        var service = new Service();

        service
            .get("/colors")
            .then(res => {
                this.setState({ colors: res.colors, step: 1 })
            })
            .catch(err => {
                console.error(err)
            })
    }

    changeScreen = () => {
        const { step } = this.state;

        switch (step) {
            case 0:
                return <SelectDifficulty changeDifficulty={this.changeDifficulty} />
            case 1:
                return <ShowColors changeDifficulty={this.changeDifficulty} />
            case 2:
                return <SelectColors changeDifficulty={this.changeDifficulty} />
            default:
                return <SelectDifficulty changeDifficulty={this.changeDifficulty} />
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.changeScreen()}
            </React.Fragment>
        )
    }
}

export default Colors
