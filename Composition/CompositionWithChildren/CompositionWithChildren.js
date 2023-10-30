class BackgroundComponent extends React.Component {
    render() {
        const componentJsx = (
            <div className={"app-border app-border-" + this.props.color}>
                {this.props.children}
            </div>
        );
        return componentJsx;
    }
}
class Component1 extends React.Component {
    render() {
        const componentJsx = (
            <div>
                <BackgroundComponent color="green">
                    <p>Hi I'm a component children</p>
                    <ul>
                        <li>We are also component children 1</li>
                        <li>We are also component children 2</li>
                    </ul>
                </BackgroundComponent>
            </div>
        );
        return componentJsx;
    }
}
class Component2 extends React.Component {
    state = {
        email: ""
    }
    submitEvent = (syntheticEvent) => {
        this.setState({
            email: ""
        });
        alert("Email submited.");
    }
    emailChangeEvent = (syntheticEvent) => {
        this.setState({
            email: syntheticEvent.target.value
        });
    }
    render() {
        const componentJsx = (
            <div>
                <BackgroundComponent color="red">
                    <form onSubmit={this.submitEvent}>
                        <label>
                            Enter your email:
                            <input type="text" value={this.state.email} onChange={this.emailChangeEvent} />
                        </label>
                        <input type="submit" value="submit email" />
                    </form>
                </BackgroundComponent>
            </div>
        );
        return componentJsx;
    }

}

ReactDOM.render(<Component1 />, document.getElementById("component-1"));
ReactDOM.render(<Component2 />, document.getElementById("component-2"));