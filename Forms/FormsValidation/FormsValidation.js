/* 
HotelBookingForm
- TextInput (guestName)
- TextInput (guestEmail)
- ComboBox (hotelName)
*/
class HotelBookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            guestEmail: "",
            hotelName: "hotel-A"
        }
        this.errors = {
            name: true,
            email: true
        }
    }
    validateGuestName = (name) => {
        var isValid = name && name.length >= 5;
        this.errors.name = !isValid;
        return isValid;
    }
    validateGuestEmail = (email) => {
        var isValid = /.+@.+\..+/.test(email);
        this.errors.email = !isValid;
        return isValid;
    }
    handleInput = (syntheticEvent) => {
        this.setState({
            [syntheticEvent.target.name]: syntheticEvent.target.value,
        });
    }
    submitForm = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        alert(
            "Guest name: " + this.state.guestName + "\n" +
            "Guest email: " + this.state.guestEmail + "\n" +
            "Hotel name: " + this.state.hotelName + "\n"
        );
        this.setState({
            guestName: "",
            guestEmail: "",
            hotelName: "hotel-A"
        });
    }
    getOptionLabel = (option) => {
        switch (option) {
            case this.props.hotels[0]:
                return "Hotel A";
            case this.props.hotels[1]:
                return "Hotel B";
            case this.props.hotels[2]:
                return "Hotel C";
        }

    }
    render() {
        const hotelBookingFormJsx = (
            <div>
                <form onSubmit={this.submitForm}>
                    <TextInput
                        label="Guest name:"
                        id="guestNameId"
                        name="guestName"
                        value={this.state.guestName}
                        inputEvent={this.handleInput}
                        validate={this.validateGuestName}
                    />
                    <TextInput
                        label="Guest email:"
                        id="guestEmailId"
                        name="guestEmail"
                        value={this.state.guestEmail}
                        inputEvent={this.handleInput}
                        validate={this.validateGuestEmail}
                    />
                    <ComboBox
                        label="Select hotel:"
                        id="hotelNameId"
                        options={this.props.hotels}
                        optionLabel={this.getOptionLabel}
                        value={this.state.hotelName}
                        inputEvent={this.handleInput}
                    />
                    <input type="submit" value="Book selected hotel" />
                </form>
            </div>
        );
        return hotelBookingFormJsx;
    }
}
HotelBookingForm.defaultProps = {
    hotels: ["hotel-A", "hotel-B", "hotel-C"]
}

class TextInput extends React.Component {
    state = {
        errorMessage: ""
    }
    handleChange = (syntheticEvent) => {
        this.setState({
            errorMessage: this.props.validate(syntheticEvent.target.value) ? "" : "* Invalid"
        });
        this.props.inputEvent(syntheticEvent);

    }
    render() {
        const textInputJsx = (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type="text"
                    id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <ErrorMessage message={this.state.errorMessage} />
            </div>
        );
        return textInputJsx;
    }
}
class ComboBox extends React.Component {
    render() {
        const comboBoxOptions = (
            this.props.options.map(option => <option key={option} value={option}>{this.props.optionLabel(option)}</option>)
        );
        const comboBoxJsx = (
            <div>
                <label htmlFor={this.props.id}>{this.props.label} </label>
                <select value={this.props.value} onChange={this.props.inputEvent}>
                    {comboBoxOptions}
                </select>
            </div>
        );
        return comboBoxJsx;
    }
}
class ErrorMessage extends React.Component {
    render() {
        var showMessage = this.props.validationResult;
        const errorMessageJsx = (
            <div className="errorMessage">
                <p>{this.props.message}</p>
            </div>
        );
        return errorMessageJsx;
    }
}
ReactDOM.render(<HotelBookingForm />, document.getElementById("react-forms-validation"));