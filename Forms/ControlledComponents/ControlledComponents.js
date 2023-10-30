class EmailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }
    handleEmailChange = (syntheticEvent) => {
        this.setState({
            email: syntheticEvent.target.value
        });
        console.log("email: ", this.state.email);
    }
    handleSubmit = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        alert("You entered " + this.state.email);
        this.setState({
            email: ""
        });
    }
    render() {
        const emailJsx = (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.email} 
                        onChange={this.handleEmailChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
        return emailJsx;
    }
}
ReactDOM.render(<EmailComponent />, document.getElementById("react-controlled-components"));
