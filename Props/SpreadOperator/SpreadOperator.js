
class Company extends React.Component {
    render() {
        const companyJsx = (
            <div className="company">
                <p><span className="label">Company:</span> {this.props.name}</p>
                <header><h3>Employees</h3></header>
                <Employee {...this.props} tenor="2" />
                <Activities {...this.props} />
            </div>
        );
        return companyJsx;
    }
}

class Employee extends React.Component {
    render() {
        const employeeJsx = (
            <div className="employee">
                <p><span className="label">Name:</span> {this.props.employeeName}</p>
                <p><span className="label">Designation:</span> {this.props.employeeDesignation}</p>
                <p><span className="label">Tenor:</span> {this.props.tenor}</p>
            </div>
        );
        return employeeJsx;
    }
}
class Activities extends React.Component {
    render() {
        const activitiesJsx = (
            <div className="activities">
                <p><span className="label">Committees</span> {this.props.committees}</p>
                <p><span className="label">Forums</span> {this.props.forums}</p>
            </div>
        );
        return activitiesJsx;
    }
}

ReactDOM.render(<Company
    name="Skillsoft"
    employeeName="Andrés Della Porta"
    employeeDesignation="Developer"
    committees="Performance review, Data insights"
    forums="StackOverflow, DataHelper"
/>, document.getElementById("react-spread-operator"));