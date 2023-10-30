class EmployeeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: props.initialNames
        };
        // we configure deleteRandomEmployee to access it through 'this' keyword
        this.deleteRandomEmployee = this.deleteRandomEmployee.bind(this);
    }

    deleteRandomEmployee() {
        const randomEmpIndex = Math.floor(Math.random() * this.state.names.length);
        const namesArr = this.state.names.concat();
        console.log("Deleting emp ", namesArr[randomEmpIndex]);
        namesArr.splice(randomEmpIndex, 1);
        this.setState({
            names: namesArr
        });
    }

    render() {
        const employeeListJsx = (
            <div>
                {this.state.names.map(
                    (curName, index) => {
                        const employeeJsx = (
                            /*
                                IMPORTANT:
                                Since the Employee components are mapped based on the order of the names array (using their keys), 
                                the components are re-rendered. However, the key order isn't stable because you generate them based on 
                                an incrementing index.
                                As a result, React cannot accurately identify which Employee component corresponds to the deleted name 
                                because the order has changed, leading to unpredictable behavior.
                                That's why instead of "key={"emp".concat(++index)}" we use "key={"emp".concat(curName)}"
                            */
                            <Employee
                                key={"emp".concat(curName)}
                                name={curName}
                            />
                        );
                        console.log("employeeJsx.key: ", employeeJsx.key);
                        return employeeJsx;
                    }
                )}
                <button className="deleteButton" onClick={this.deleteRandomEmployee}>Delete random</button>
            </div>
        );
        return employeeListJsx;
    }
}

class Employee extends React.Component {

    constructor(props) {
        super(props);
        console.log("1. constructor");
    }

    render() {
        console.log("2. render");
        const employeeJsx = (
            <div className="employee">
                <p>{this.props.name}</p>
            </div>
        );
        return employeeJsx;
    }

    // special function invoked after the component has being mounted
    componentDidMount() {
        console.log("3. mount")
    }

    componentWillUnmount() {
        console.log("4. unmount");
    }

}
ReactDOM.render(<EmployeeList initialNames={["Andres", "Jose", "Enrique", "Lionel", "Juan"]} />, document.getElementById("react-unmount-phase"));