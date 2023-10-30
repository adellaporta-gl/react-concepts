class Employees extends React.Component {

    constructor(props) {
        super(props);
        console.log("1. constructor");
        this.state = {
            names: props.initialNames,
            mounted: false
        }
    }

    render() {
        console.log("2. render");
        const employeesJsx = (
            <div>
                {this.state.names.map(
                    (curName, index) => {
                        const nameJsx = (
                            <div 
                                className="employee"
                                key={"emp".concat(++index)}
                            >
                                {curName}
                            </div>
                        );
                        console.log("nameJsx.key: ", nameJsx.key);
                        return nameJsx;
                    }
                )}
            </div>
        );
        return employeesJsx;
    }

    // special function invoked after the component has being mounted
    componentDidMount() {
        console.log("3. mount")
    }
}
ReactDOM.render(<Employees initialNames={["Andres", "Jose", "Enrique"]}/>, document.getElementById("react-mount-phase"));