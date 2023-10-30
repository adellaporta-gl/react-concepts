class Display extends React.Component {
    render() {
        var displayType = "default";
        if (this.props.displayType == "ok") {
            displayType = "ok";
        }
        if (this.props.displayType == "warning") {
            displayType = "warning";
        }
        if (this.props.displayType == "error") {
            displayType = "error";
        }
        const displayJsx = (
            <div className={"app-display app-" + displayType}>
                <h3 className="app-display-title">{this.props.title}</h3>
                <p className="app-display-msg">{this.props.message}</p>
            </div>
        );
        return displayJsx;
    }
}
class OKDisplay extends React.Component {
    render() {
        const okDisplayJsx = (
            <div>
                <Display displayType="ok" title="Success" message="Everything ok!" />
            </div>
        );
        return okDisplayJsx;
    }
}
class WarningDisplay extends React.Component {
    render() {
        const okDisplayJsx = (
            <div>
                <Display displayType="warning" title="Warning" message="Everything went ok but there were some warnings" />
            </div>
        );
        return okDisplayJsx;
    }
}
class ErrorDisplay extends React.Component {
    render() {
        const okDisplayJsx = (
            <div>
                <Display displayType="error" title="Warning" message="Something went wrong! :(" />
            </div>
        );
        return okDisplayJsx;
    }
}
// ReactDOM.render(<Display title="App default title" message="This is the default display message" />, document.getElementById("react-composition-for-specialization"));
// ReactDOM.render(<OKDisplay />, document.getElementById("react-composition-for-specialization"));
// ReactDOM.render(<WarningDisplay />, document.getElementById("react-composition-for-specialization"));
ReactDOM.render(<ErrorDisplay />, document.getElementById("react-composition-for-specialization"));