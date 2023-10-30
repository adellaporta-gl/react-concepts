class Message extends React.Component {
    constructor(props) {
        super(props);
        this.className = "message";
    }
    render() {
        const messageJsx = (
            <div className={this.className + " " + this.props.cssClasses}>
                <p>{this.props.message}</p>
            </div>
        );
        return messageJsx;
    }
}
class SuccessMessage extends React.Component {
    render() {
        const successMsgJsx = (
            <div>
                <Message {...this.props} cssClasses="success" />
            </div>
        );
        return successMsgJsx;
    }
}
class ErrorMessage extends React.Component {
    render() {
        const errorMsgJsx = (
            <div>
                <Message {...this.props} cssClasses="error" />
            </div>
        );
        return errorMsgJsx;
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
ReactDOM.render(<Display />, document.getElementById("react-composition"));