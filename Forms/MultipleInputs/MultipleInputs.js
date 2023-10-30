class HotelBookingForm extends React.Component {
    state = {
        guestName: "",
        guestEmail: "",
        hotelName: "hotel-A",
        hotelLocation: "ARG"
    }
    changeFormEvent = (syntheticEvent) => {
        const controllName = syntheticEvent.target.name;
        var controllValue = syntheticEvent.target.value;
        if (controllName == "guestName") {
            console.log("I'm guestName!" + controllValue);
            controllValue = controllValue.toUpperCase();
        } else if (controllName == "guestEmail") {
            console.log("I'm guestEmail!" + controllValue);
        } else if (controllName == "hotelName") {
            console.log("I'm hotelName!" + controllValue);
        } else if (controllName == "hotelLocation") {
            console.log("I'm hotelLocation!" + controllValue);
        } else {
            throw new Error("Not found!");
        }
        // IMPORTANT: 
        // here we use ES6's computed property names (ES6: ECMA Script 6)
        this.setState({
            // CORRECT:     '[syntheticEvent.target.name]: controllValue'
            // INCORRECT:   '[name]: controllValue' => if 'const controllName = syntheticEvent.target.name'
            // CORRECT:     '[name]: controllValue' => if 'const name = syntheticEvent.target.name' 
            [controllName]: controllValue
        });
    }
    submitFormEvent = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        alert("Guest name: " + this.state.guestName + "\n" +
            "Guest email: " + this.state.guestEmail + "\n" +
            "Hotel name: " + this.state.hotelName + "\n" +
            "Hotel location: " + this.state.hotelLocation);
        this.setState({
            guestName: "",
            guestEmail: "",
            hotelName: "hotel-A",
            hotelLocation: "ARG"
        });
    }
    render() {
        const hotelBookingFormJsx = (
            <div>
                <form onSubmit={this.submitFormEvent}>
                    <div>
                        Guest name:
                        <input  type="text" 
                                name="guestName" 
                                value={this.state.guestName} 
                                onChange={this.changeFormEvent} />
                    </div>
                    <div>
                        Guest email:
                        <input  type="text" 
                                name="guestEmail" 
                                value={this.state.guestEmail} 
                                onChange={this.changeFormEvent} />
                    </div>
                    <div>
                        Hotel name:
                        <select name="hotelName" 
                                onChange={this.changeFormEvent}>
                            <option value="hotel-A">Hotel A</option>
                            <option value="hotel-B">Hotel B</option>
                            <option value="hotel-C">Hotel C</option>
                        </select>
                    </div>
                    <div>
                        Hotel location:
                        <input  type="text" 
                                name="hotelLocation" 
                                value={this.state.hotelLocation} 
                                onChange={this.changeFormEvent} />
                    </div>
                    <input type="submit" value="submit form" />
                </form>
            </div>
        );
        return hotelBookingFormJsx;
    }
}
ReactDOM.render(<HotelBookingForm />, document.getElementById("react-forms-multiple-inputs"));