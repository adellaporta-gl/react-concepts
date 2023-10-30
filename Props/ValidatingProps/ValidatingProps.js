class Student extends React.Component {
    render() {
        const studentJsx = (
            <div className="student">
                <p><span className="label">ID:</span> {this.props.id}</p>
                <p><span className="label">Name:</span> {this.props.name}</p>
                <p><span className="label">Enrolled:</span> {this.props.enrolled ? "yes" : "no"}</p>
                <p><span className="label">Campus:</span> {this.props.campus}</p>
                <p><span className="label">*Major:</span> {this.props.major}</p>
                <p><span className="label">Courses:</span> {this.props.courses}</p>
            </div>
        );
        return studentJsx;
    }
}

Student.defaultProps = {
    "id": Math.floor(Math.random() * 100000),
    "enrolled": true
}

Student.propTypes = {
    "id": PropTypes.number,
    "name": PropTypes.string,
    "enrolled": PropTypes.bool,
    "campus": PropTypes.oneOf(["CampusA", "CampusB"]),
    "major": PropTypes.string.isRequired,
    courses(props, propName) {
        // props    ==> component's props 
        // propName ==> the name of the prop that is the name of the funciton, 'courses' in this example
        const propValue = props[propName];
        const errorMsg = "*** ke hiciste, cortaste toda la loz! ***";
        if (propValue != "CourseA" && propValue != "CourseB") {
            throw new Error(errorMsg.toUpperCase());
        }
    }
}


ReactDOM.render(<Student
    name={"Andrés Della Porta"}
    major="Computer Science"
    courses="CourseA"
/>, document.getElementById("react-prop-validation"));