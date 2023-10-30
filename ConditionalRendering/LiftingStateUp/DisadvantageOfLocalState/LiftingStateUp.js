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
        this.state = {
            localNetworth: 0
        }
        this.handleInputChangeEvent = this.handleInputChangeEvent.bind(this);
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
                            defaultValue={this.state.localNetworth}
                            onChange={this.handleInputChangeEvent}
                        />
                        <Millionare enteredNetworth={this.state.localNetworth} />
                    </label>
                </fieldset>
            </div>
        );
        return networthInputJsx;
    }
    handleInputChangeEvent(syntheticEvent) {
        this.setState({
            networthInputValue: syntheticEvent.target.value
        });
        console.log(this.state.localNetworth);
    }
}
class MillionareCalculator extends React.Component {
    state = {
        currentNetworth: 0
    }
    render() {
        const millionareCalculatorJsx = (
            <div>
                <form>
                    <NetworthInput currency="d" />
                    <NetworthInput currency="a" />
                </form>
            </div>
        );
        return millionareCalculatorJsx;
    }
}
ReactDOM.render(<MillionareCalculator />, document.getElementById("react-state-uplifting"));
