class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "height": "200px",
            "width": "200px",
            "border-radius": "50%",
            "border": "10px solid green",
            "background-color": "black",
        }
    }
    render() {
        const circleJsx = (
            <div className="circle" style={this.state}></div>
        );
        return circleJsx;
    }
}
class AnotherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
            "border": "10px solid blue",
            "color": "blue",
            // can use 'font-family' with '' or "" instead of fontFamily without '' or ""
            "font-family": "monospace"
        }
    }
    render() {
        const anotherComponentStyle = {
            // can use lowerCamelCase backgroundColor without or '' or ""
            backgroundColor: this.state.backgroundColor,
            color: this.state.color,
            width: "30vw",
            padding: "1.2em",
        };
        const anotherComponentJsx = (
            <div style={anotherComponentStyle}>
                <p>Accesinng state atributes like 'this.state.backgroundColor'</p>
            </div>
        );
        return anotherComponentJsx;
    }
}
ReactDOM.render(<Circle />, document.getElementById("react-state"));
ReactDOM.render(<AnotherComponent />, document.getElementById("react-state-another"));