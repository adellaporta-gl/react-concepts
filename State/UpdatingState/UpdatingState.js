const names = ["Andres", "Jose", "Daniel", "Gerardo"];
const subjects = ["Math", "History", "Biology", "Geography", ""]
const fontColors = ["red", "black", "lightgreen", "yellow"];
const borderColors = ["blue", "purple", "orange"]

class Student extends React.Component {
    state = {
        color: "white",
        name: "no name"
    }
    changeName = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        this.setState({
            name: names[randomIndex]
        });
    }
    changeSubject = () => {
        const randomIndex = Math.floor(Math.random() * subjects.length);
        this.setState({
            subject: subjects[randomIndex]
        });
    }
    changeFontColor = () => {
        const randomIndex = Math.floor(Math.random() * fontColors.length);
        const randomFontColor = fontColors[randomIndex];
        this.setState({
            color: randomFontColor
        })
    }
    render() {
        const studentName = this.state == null ? "" : this.state.name;
        const studentSubject = this.state == null ? "" : this.state.subject;
        const studentJsx = (
            <div className="student" style={this.state}>
                <p><span className="label">Name:</span> {studentName}</p>
                <p><span className="label">Subject:</span> {studentSubject}</p>
                <div className="">
                    <p className="note">NOTE: to access to the 'changeFontColor' use 'this' keyword</p>
                    <button onClick={this.changeFontColor}>Change color!</button>
                    <button onClick={this.changeName}>Change name!</button>
                </div>
            </div>
        );
        return studentJsx;
    }

}

ReactDOM.render(<Student />, document.getElementById("react-updating-state"));