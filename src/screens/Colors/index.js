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
            colors: [],
            selectedColors: []
        }
    }

    changeStep = (value) => {
        this.setState({ step: value })
    }

    changeDifficulty = (value) => {
        this.setState({ difficulty: value }, () => {
            this.getColors();
        })
    }

    getColors = () => {
        var service = new Service();
        const { difficulty } = this.state;

        service
            .get(`/colors?d=${difficulty}`)
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
                return <ShowColors colors={this.state.colors} changeStep={this.changeStep} />
            case 2:
                return <SelectColors changeStep={this.changeStep} colors={this.state.colors} difficulty={this.state.difficulty} />
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
