import React, { Component } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Grid } from '@mui/material'
import './Calculator.css'
import Btn from '../components/Button'
import Display from '../components/Display'

const inititalState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentValue: 0
}
class Calculator extends Component {
    state = {...inititalState}

    setOperation(operation) {
        if (this.state.currentValue === 0) {
            this.setState({
                operation,
                currentValue: 1,
                clearDisplay: true
            })
        } else {
            const equals = operation === '='
            const currentOp = this.state.operation
            const values = [...this.state.values]
            
            switch(currentOp) {
                case '+':
                    values[0] = values[0] + values[1]
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    break
                case '/':
                    values[0] = values[0] / values[1]
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    break
                default:
                    values[0] = values[0]
                    break
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: (equals) ? null : operation,
                currentValue: (equals) ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    setDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')) return
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({
            displayValue,
            clearDisplay: false
        })

        if (digit !== '.') {
            const i = this.state.currentValue
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({
                values
            })
        }
    }

    clear() {
        this.setState({...inititalState})
    }

    render () {
        const setDigit = n => this.setDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div>
                <h1 >Calculator</h1>
                <Card className="calculator">
                    <CardContent>
                        <Display valor={this.state.displayValue} />
                        <Grid container spacing={{ xs: 2}} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12}>
                                <Btn label="AC" variant="outlined" click={() => this.clear()} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="7" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="8" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="9" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="/" variant="outlined" click={setOperation} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="4" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="5" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="6" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="*" variant="outlined" click={setOperation} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="1" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="2" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="3" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="-" variant="outlined" click={setOperation} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="0" variant="contained" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="." variant="outlined" click={setDigit} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="=" variant="outlined" click={setOperation} />
                            </Grid>
                            <Grid item xs={3}>
                                <Btn label="+" variant="outlined" click={setOperation} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Calculator