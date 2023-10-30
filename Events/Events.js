class Counter extends React.Component {
    state = {
        counter: 0
    }
    // passing in an ARROW function to this.setState()
    incrementEvent = (event) => { 
        // IMPORTANT:
        // here 'event' is the synthetic event (cross-browser wrapper) that wrapps the native event
        this.setState(
            (prevState, props) => {
                return { counter: prevState.counter + props.increment }
            }
        );
    }
    // passing in a function to this.setState()
    decrementEvent = (anotherSyntheticEvent) => {
        this.setState(
            function (previousState, props) {
                var newCounterValue = {
                    counter: previousState.counter - props.decrement
                }
                return newCounterValue;
            }
        );
    }
    // IMPORTANT:
    // in both events, the functions that are passed in to this.setState return an objects
    // that matches the state object with counter property 
    printCounter = () => {
        console.log("counter: " + this.state.counter);
    }
    render() {
        const counterJsx = (
            <div className="counterContainer">
                <div>
                    <p><span className="label">Increment:</span> {this.props.increment}</p>
                    <p><span className="label">Decrement:</span> {this.props.decrement}</p>
                </div>
                <div className="counterScreen">
                    <p>{this.state.counter}</p>
                </div>
                <button className="counterButton" onClick={this.decrementEvent} onMouseEnter={this.printCounter}>-</button>
                <button className="counterButton" onClick={this.incrementEvent} onMouseEnter={this.printCounter}>+</button>
            </div>
        );
        return counterJsx;
    }
}
ReactDOM.render(<Counter increment={1} decrement={2} />, document.getElementById("react-event"));