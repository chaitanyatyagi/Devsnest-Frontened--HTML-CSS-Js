import React from "react";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0,
            count4: 0,
            show1: true,
            show2: true,
            show3: true,
            show4: true
        };
    }
    myfunction1() {
        if (this.state.count1 < 10) {
            this.setState({
                count1: this.state.count1 + 1
            })
        }
        if (this.state.count1 > 9) {
            this.setState(
                {
                    show1: false
                }
            )
            alert("You clicked more than 10times")
        }
    }
    myfunction2() {
        if (this.state.count2 < 10) {
            this.setState({
                count2: this.state.count2 + 1
            })
        }
        if (this.state.count2 > 9) {
            this.setState(
                {
                    show2: false
                }
            )
            alert("You clicked more than 10times")
        }
    }
    myfunction3() {
        if (this.state.count3 < 10) {
            this.setState({
                count3: this.state.count3 + 1
            })
        }
        if (this.state.count3 > 9) {
            this.setState(
                {
                    show3: false
                }
            )
            alert("You clicked more than 10times")
        }
    }
    myfunction4() {
        if (this.state.count4 < 10) {
            this.setState({
                count4: this.state.count4 + 1
            })
        }
        if (this.state.count4 > 9) {
            this.setState(
                {
                    show4: false
                }
            )
            alert("You clicked more than 10times")
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.myfunction1() }}>{this.state.count1}</button>
                <button onClick={() => { this.myfunction2() }}>{this.state.count2}</button>
                <button onClick={() => { this.myfunction3() }}>{this.state.count3}</button>
                <button onClick={() => { this.myfunction4() }}>{this.state.count4}</button>
            </div>
        )
    }
}

export default Main;