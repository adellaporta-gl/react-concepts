class Toggle extends React.Component {

    state = {
        enabled: true,
        message: "click something"
    }

    constructor(props) {
        super(props);
        this.showMessage = this.showMessage.bind(this);
    }

    handleClick = (synthEvent) => {
        synthEvent.preventDefault();
        this.setState(
            function (prevState, props) {
                const newEnabledValue = !prevState.enabled;
                return { enabled: newEnabledValue }
            }
        );
    }

    showMessage() {
        if (this.state.enabled) {
            alert("Do you want to disable?");
            this.setState({
                message: "The button is disabled"
            });
        } else {
            alert("Do you want to enable?");
            this.setState({
                message: "The button is enabled"
            });
        }
    }

    render() {
        const statusLabel = this.state.enabled ? "true" : "false";
        const buttonLabel = this.state.enabled ? "Disable" : "Enable";
        const toggleJsx = (
            <div>
                <div className="box">
                    <p>enabled-status: {statusLabel}</p>
                    <p>message: {this.state.message}</p>
                </div>
                <button onClick={(e) => {
                    this.handleClick(e);
                    this.showMessage();
                }}>
                    {buttonLabel}
                </button>
            </div>
        );
        return toggleJsx;
    }
}
ReactDOM.render(<Toggle />, document.getElementById("app-toggle"));