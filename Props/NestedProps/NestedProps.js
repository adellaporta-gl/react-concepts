class Employee extends React.Component {
    render() {
        const employeeJsx = (
            <div className="employee">
                <p>
                    <span className="empFirstName">{this.props.firstName}</span>
                     - 
                    <span className="empLastName">{this.props.lastName}</span>
                </p>
            </div>
        );
        return employeeJsx;
    }
}

class Company extends React.Component {
    getBestEmployee() {
        return { "first_name": "Lionel", "last_name": "Messi" };
    }
    render() {
        const companyJsx = (
            <div id="company">
                <Employee firstName="Andrés" lastName="Della Porta" />
                <Employee firstName={"Ni" + "na"} lastName={"Matt" + "hew"} />
                <Employee firstName={this.getBestEmployee().first_name} lastName={this.getBestEmployee().last_name} />
            </div>
        );
        return companyJsx;
    }
}

ReactDOM.render(<Company />, document.getElementById("my-nested-props"));