const DEFAULT_INCREMENT_OR_DECREMENT = 1;
class Counter extends React.Component {

    state = {
        counter: 0
    }

    calculateValue(syntheticEvent) {
        var currentIncrement = DEFAULT_INCREMENT_OR_DECREMENT;
        if (syntheticEvent.shiftKey) {
            currentIncrement = currentIncrement * 10;
        } else if (syntheticEvent.altKey) {
            currentIncrement = currentIncrement * 100;
        }
        return currentIncrement;
    }

    incrementCounterEvent = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        /*
            calculate the increment value (for shift/alt key) here as 
            to accurately capture the state of the 'shiftKey' and 'altKey' properties 
            at the moment when the event occurred.
            */
        var currentIncrement = this.calculateValue(syntheticEvent);
        this.setState(
            (previousState, props) => {
                /* 
                    If we calculate the increment value (for shift/alt key) here 
                    the calculation would be performed after the 'shiftKey' and 'altKey' 
                    checks are made.                         
                */
                console.log("previousState.counter: ", previousState.counter);
                console.log("currentIncrement: ", currentIncrement);
                var newCounterValue = previousState.counter + currentIncrement;
                return {
                    counter: newCounterValue
                }
            }
        );
    }

    decrementCounterEvent = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        syntheticEvent.persist();
        /*
            the calculation is performed within the this.setState method argument's 
            function, this operation will happen after 'shiftKey' and 'altKey' 
            synthethic event's attributes are checked. 
            That's why we persist the synthetic event above 
        */
        this.setState(
            (previousState, props) => {
                var currentIncrement = DEFAULT_INCREMENT_OR_DECREMENT;
                if (syntheticEvent.shiftKey) {
                    currentIncrement = currentIncrement * 10;
                } else if (syntheticEvent.altKey) {
                    currentIncrement = currentIncrement * 100;
                }
                console.log("previousState.counter: ", previousState.counter);
                console.log("currentIncrement: ", currentIncrement);
                var newCounterValue = previousState.counter - currentIncrement;
                return {
                    counter: newCounterValue
                }
            }
        );
    }

    render() {
        const counterMsgShift = "Press 'shift' and click to increment/decrement by 10";
        const counterMsgAlt = "Press 'alt' and click to increment/decrement by 100";
        const counterJsx = (
            <div className="box">
                <div className="counterScreen">{this.state.counter}</div>
                <button className="counterButton" onClick={this.incrementCounterEvent}>+</button>
                <button className="counterButton" onClick={this.decrementCounterEvent}>-</button>
                <div className="note">
                    <p>{counterMsgShift}</p>
                    <p>{counterMsgAlt}</p>
                </div>
            </div>
        );
        return counterJsx;
    }
}
ReactDOM.render(<Counter />, document.getElementById("app-counter"));