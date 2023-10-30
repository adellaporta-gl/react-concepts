const DECIMALS = 2;
const CONVERTION_RATE = Math.pow(10, DECIMALS);
const currencyEnum = {
    "d": "dolar",
    "a": "argentinian peso"
}
const currencySymbolEnum = {
    "d": "USD",
    "a": "ARS"
}
function toDollars(argentinianPesos) {
    return argentinianPesos / 1000;
}
function toArgentinanPeso(dollars) {
    return dollars * 950;
}
function tryConvert(money, convertionFunction) {
    const moneyToConvert = parseFloat(money);
    if (Number.isNaN(moneyToConvert)) {
        return "";
    }
    const convertedMoney = convertionFunction(moneyToConvert);
    const roundedConvertedMoney = Math.round(convertedMoney * CONVERTION_RATE) / CONVERTION_RATE;
    return roundedConvertedMoney.toString();
}

// 1.
function Millionare(props) {
    var millionareJsx;
    if (props.networthInDollars > 1000000) {
        millionareJsx = <div className="millionareMsg ok"><p>Awesome!! You are a millionare</p></div>
    } else {
        millionareJsx = <div className="millionareMsg notYet"><p>Sorry, you are not a millionare yet</p></div>;
    }
    return millionareJsx;
}

// 2.
class NetworthInput extends React.Component {
    handleInputChangeEvent = (syntheticEvent) => {
        this.props.changeEventHandler(syntheticEvent.target.value);
    }
    render() {
        const networth = this.props.networth;
        const currency = this.props.currency;
        const currencySymbol = currencySymbolEnum[currency];
        const networthInputJsx = (
            <div className={"networthInput " + currencySymbol.toLocaleLowerCase()}>
                <fieldset>
                    <legend>
                        Enter your current networth in {currencyEnum[currency]}
                    </legend>
                    <label>
                        <span className="currencySymbolLabel">{currencySymbol}</span>
                        <input
                            type="number"
                            value={networth}
                            onChange={this.handleInputChangeEvent}
                        />
                    </label>
                </fieldset>
            </div>
        );
        return networthInputJsx;
    }
}

// 3. 
class MillionareCalculator extends React.Component {
    state = {
        currency: "",
        networth: 0
    }
    handleNetworthChangeUsd(networthInput) {
        this.setState({
            currency: "d",
            networth: networthInput,
        });
    }
    handleNetworthChangeArs = (networthInput) => {
        this.setState({
            currency: "a",
            networth: networthInput
        });
    }
    constructor(props) {
        super(props);
        this.handleNetworthChangeUsd = this.handleNetworthChangeUsd.bind(this);
    }
    render() {
        const networth = this.state.networth;
        const currency = this.state.currency;
        const usdNetworth = currency === "d" ? networth : tryConvert(networth, toDollars);
        const arsNetworth = currency === "a" ? networth : tryConvert(networth, toArgentinanPeso);
        const millionareCalculatorJsx = (
            <div>
                <form>
                    <NetworthInput currency="d" networth={usdNetworth} changeEventHandler={this.handleNetworthChangeUsd} />
                    <NetworthInput currency="a" networth={arsNetworth} changeEventHandler={this.handleNetworthChangeArs} />
                    <Millionare networthInDollars={usdNetworth} />
                    <button onClick={this.showNetworth}>Check networth</button>
                </form>
            </div>
        );
        return millionareCalculatorJsx;
    }
    showNetworth = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        alert(
            "Networth: " + this.state.networth
        );
    }
}
ReactDOM.render(<MillionareCalculator />, document.getElementById("react-state-uplifting"));
