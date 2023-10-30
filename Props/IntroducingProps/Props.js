    class GreetingComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React {this.props.message}</h1>
            </div>
        );
    }
}

ReactDOM.render(< GreetingComponent message="Hello React developers!"/>, document.getElementById("prop-id-1"));
ReactDOM.render(< GreetingComponent message="React is definitely more fun now, isn't it?"/>, document.getElementById("prop-id-2"));