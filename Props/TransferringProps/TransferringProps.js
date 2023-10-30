
class Company extends React.Component {
    render() {
        const companyJsx = (
            <div className="company">
                <p><span className="label">Company:</span> {this.props.name}</p>
                <Employee firstName={this.props.empFirstName} lastName={this.props.empLastName} designation={this.props.empDesignation} />
                <Activities comittees={this.props.actComittees} forums={this.props.actForums} />
            </div>
        );
        return companyJsx;
    }
}
class Employee extends React.Component {
    render() {
        const employeeJsx = (
            <div className="employee">
                <p><span className="label">FirstName:</span> {this.props.firstName}</p>
                <p><span className="label">LastName:</span> {this.props.lastName}</p>
                <p><span className="label">Designation:</span> {this.props.designation}</p>
            </div>
        );
        return employeeJsx;
    }
}

class Activities extends React.Component {
    render() {
        const activitiesJsx = (
            <div className="activities">
                <p><span className="label">Comittees:</span> {this.props.comittees}</p>
                <p><span className="label">Forums:</span> {this.props.forums}</p>
            </div>
        );
        return activitiesJsx;
    }
}

ReactDOM.render(<Company
    name="Skillsoft"
    empFirstName="Andrés"
    empLastName="Della Porta"
    empDesignation="Developer"
    actComittees="Performance review, Data insights"
    actForums="StackOverflow, DataHelper"
/>, document.getElementById("my-transferred-props"));