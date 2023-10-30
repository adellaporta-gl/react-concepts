class Message extends React.Component {
    constructor(props) {
        super(props);
        this.className = "message";
    }
    render() {
        const messageJsx = (
            <div className={this.className}>
                <p>{this.props.message}</p>
            </div>
        );
        return messageJsx;
    }
}
class SuccessMessage extends Message {
    constructor(props) {
        super(props);
        this.className = this.className + " success";
    }
    render() {
        const successMsgJsx = (
            <div>
                {super.render()}
            </div>
        );
        return successMsgJsx;
    }
}
class ErrorMessage extends Message {
    constructor(props) {
        super(props);
        this.className = this.className + " error";
    }
    render() {
        const successMsgJsx = (
            <div>
                {super.render()}
            </div>
        );
        return successMsgJsx;
    }
}
class Display extends React.Component {
    render() {
        const displayJsx = (
            <div>
                <Message message="hi, I'm a message!" />
                <SuccessMessage message="hi, I'm a success message!" />
                <ErrorMessage message="hi, I'm an error message!" />
            </div>
        );
        return displayJsx;
    }
}
ReactDOM.render(<Display />, document.getElementById("react-inheritance"));