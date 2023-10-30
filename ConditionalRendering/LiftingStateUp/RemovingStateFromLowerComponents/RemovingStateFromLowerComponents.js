const currencyEnum = {
    "d": "dolar",
    "a": "argentinian peso"
}
const currencySymbolEnum = {
    "d": "USD",
    "a": "ARS"
}

function Millionare(props) {
    var millionareJsx;
    if (props.enteredNetworth > 1000000) {
        millionareJsx = <div className="millionareMsg ok"><p>Awesome!! You are a millionare</p></div>
    } else {
        millionareJsx = <div className="millionareMsg notYet"><p>Sorry, you are not a millionare yet</p></div>;
    }
    return millionareJsx;
}

class NetworthInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const networthInputJsx = (
            <div className={"networthInput " + currencySymbolEnum[this.props.currency].toLocaleLowerCase()}>
                <fieldset>
                    <legend>
                        Enter your current networth in {currencyEnum[this.props.currency]}
                    </legend>
                    <label>
                        <span className="currencySymbolLabel">{currencySymbolEnum[this.props.currency]}</span>
                        <input
                            type="number"
                            value={this.props.networth}
                            defaultValue={this.props.networth}
                            onChange={this.handleInputChangeEvent}
                        />
                        <Millionare enteredNetworth={this.props.networth} />
                    </label>
                </fieldset>
            </div>
        );
        return networthInputJsx;
    }
    handleInputChangeEvent = (syntheticEvent) => {
        const inputValue = syntheticEvent.target.value;
        this.props.changeEventHandler(inputValue);
    }
}
class MillionareCalculator extends React.Component {
    state = {
        currentNetworth: 0
    }
    constructor(props) {
        super(props);
        this.handleNetworthChange = this.handleNetworthChange.bind(this);
    }
    render() {
        const millionareCalculatorJsx = (
            <div>
                <form>
                    <NetworthInput currency="d" networth={this.state.currentNetworth} changeEventHandler={this.handleNetworthChange} />
                    <NetworthInput currency="a" networth={this.state.currentNetworth} changeEventHandler={this.handleNetworthChange} />
                </form>
            </div>
        );
        return millionareCalculatorJsx;
    }
    handleNetworthChange(inputValue) {
        this.setState({
            currentNetworth: inputValue
        });
        console.log("currentNetworth: " + this.state.currentNetworth);
    }
}
ReactDOM.render(<MillionareCalculator />, document.getElementById("react-state-uplifting"));
