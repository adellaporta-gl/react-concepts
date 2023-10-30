class Employee extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const employeeJsx = (
            <div className="employee">
                <p><span className="label">Name:</span> {this.props.employeeName}</p>
                <p><span className="label">ID:</span> {this.props.employeeId}</p>
                <p><span className="label">Enrolled:</span> {this.props.isEmployeeEnrolled ? "yes" : "no"}</p>
            </div>
        );
        return employeeJsx;
    }
}
Employee.defaultProps = {
    "employeeId": Math.floor(Math.random() * 1000000),
    "isEmployeeEnrolled": true
}
ReactDOM.render(<Employee employeeName="Andrés" />, document.getElementById("react-default-props"));