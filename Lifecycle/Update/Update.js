const numbersForApp = [
    3, 2, 5, 4, 11, 12, 9, 16
];
class Number extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const numberJsx = (
            <div className="numberContainer">
                {this.props.number}
            </div>
        );
        return numberJsx;
    }
}
class AnotherNumber extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    shouldComponentUpdate(prevProps, prevState) {
        
    }
    render() {
        const anotherNumberJsx = (
            <div className="anotherNumberContainer">
                {this.props.number}
            </div>
        );
        return anotherNumberJsx;
    }
}

class StreamNumber extends React.Component {
    state = {
        index: 0
    }
    next = () => {
        this.setState(
            (prevState, props) => {
                var nextIndex = 0;
                if (nextIndex <= (numbersForApp.length - 1)) {
                    nextIndex = prevState.index + 1;
                }
                return {
                    index: nextIndex
                }
            }
        );
    }
    render() {
        const numberAppJsx = (
            <div>
                <Number number={numbersForApp[this.state.index]} />
                <button className="nextNumberButton" onClick={this.next}>Next number</button>
            </div>
        );
        return numberAppJsx;

    }
}
ReactDOM.render(<StreamNumber />, document.getElementById("react-update-phase"));