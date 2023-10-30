class Warning extends React.Component {
    render() {
        var warningJsx;
        if (!this.props.warn) {
            warningJsx = null;
        } else {
            warningJsx = (
                <div className="warning">
                    <img src="../img/warning.png" />
                </div>
            );
        }
        return warningJsx;
    }

}
class Display extends React.Component {
    toggleWarning() {
        this.setState(function (prevState, props) {
            return { showWarning: !prevState.showWarning }
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false
        }
        this.toggleWarning = this.toggleWarning.bind(this);
    }
    render() {
        const displayJsx = (
            <div>
                <button
                    onClick={this.toggleWarning}
                >
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
                <Warning warn={this.state.showWarning} />
            </div>
        );
        return displayJsx;
    }
}
ReactDOM.render(<Display />, document.getElementById("react-prevent-rendering"));