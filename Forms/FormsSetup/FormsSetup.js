class HotelBookingForm extends React.Component {
    state = {
        guestName: "",
        guestEmail: "",
        phoneNumber: 0,
        hotelName: "hotel-A",
        hotelLocation: "ARG"
    }
    handleInputEvent = (syntheticEvent) => {
        const inputIdValue = syntheticEvent.target.id;
        const inputName = syntheticEvent.target.name;
        const inputValue = syntheticEvent.target.value;
        this.setState({
            ["id"]: inputIdValue,
            [inputName]: inputValue
        });
    }
    submitForm = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        alert("Guest name: " + this.state.guestName +
            "\nGuest email: " + this.state.guestEmail +
            "\nPhone number: " + this.state.phoneNumber +
            "\nHotel name: " + this.state.hotelName +
            "\nHotel location: " + this.state.hotelLocation
        );
    }
    render() {
        const hotelBookingJsx = (
            <div>
                <form onSubmit={this.submitForm}>
                    <TextInput
                        id="guestNameId"
                        name="guestName"
                        label="Guest name: "
                        value={this.state.guestName}
                        handleInputTextEvent={this.handleInputEvent}
                    />
                    <TextInput
                        id="guestEmailId"
                        name="guestEmail"
                        label="Guest email: "
                        value={this.state.guestEmail}
                        handleInputTextEvent={this.handleInputEvent}
                    />
                    <NumberInput
                        id="phoneNumberId"
                        name="phoneNumber"
                        label="Phone number: "
                        value={this.state.phoneNumber}
                        handleInputNumberEvent={this.handleInputEvent}
                    />
                    <ComboBox
                        id="hotelNameId"
                        name="hotelName"
                        label="Hotel name: "
                        value={this.state.hotelName}
                        hotelOptions={this.props.hotels}
                        handleComboBoxSelectionEvent={this.handleInputEvent}
                    />
                    <input type="submit" value="submit form" />
                </form>
            </div>
        );
        return hotelBookingJsx;
    }
}

// stateless form elements
// 1. TextInput (name, email)
// 2. NumberInput (phoneNumber)
// 3. ComboBox (hotelName)

// hotels
HotelBookingForm.defaultProps = {
    hotels: ["hotel-A", "hotel-B", "hotel-C"]
}

// 1.
class TextInput extends React.Component {
    render() {
        const inputJsx = (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type="text"
                    id={this.props.id}
                    name={this.props.name}
                    onChange={this.props.handleInputTextEvent} />
            </div>
        );
        return inputJsx;
    }
}
// 2.
class NumberInput extends React.Component {
    render() {
        const numberInputJsx = (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type="number"
                    id={this.props.id}
                    name={this.props.name}
                    onChange={this.props.handleInputNumberEvent}
                />
            </div>
        );
        return numberInputJsx;
    }
}
// 3.
class ComboBox extends React.Component {
    render() {
        const comboBoxJsx = (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <select
                    id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleComboBoxSelectionEvent}
                >
                    {this.props.hotelOptions.map(
                        (hotel) => {
                            var hotelName = "";
                            if (hotel == "hotel-A") {
                                hotelName = "Hotel A";
                            }
                            else if (hotel == "hotel-B") {
                                hotelName = "Hotel B";
                            }
                            else if (hotel == "hotel-C") {
                                hotelName = "Hotel C";
                            }
                            return <option key={hotel} value={hotel}>{hotelName}</option>
                        }
                    )}
                </select>
            </div>
        );
        return comboBoxJsx;
    }
}
ReactDOM.render(<HotelBookingForm />, document.getElementById("hotel-booking"));