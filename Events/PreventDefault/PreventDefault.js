class AnchorLink extends React.Component {
    state = {
        linkCounter: 0
    }
    handleClick = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        console.log("syntheticEvent.type: ", syntheticEvent.type);
        console.log("nativeEvent: ", syntheticEvent.nativeEvent);
        console.log("prev linkCounter: ", this.state.linkCounter);
        this.setState(
            (prevState, props) => {
                return {
                    linkCounter: prevState.linkCounter + 1
                }
            }
        );
    }
    render() {
        const anchorLinkJsx = (
            <div className="container">
                <a
                    href="https://www.skillsoft.com/"
                    target="_blank"
                    onClick={this.handleClick}>
                    Click me!
                </a>
            </div>
        );
        return anchorLinkJsx;
    }
}

ReactDOM.render(<AnchorLink />, document.getElementById("react-prevent-default-events"));