class HotelGuest extends React.Component {
    state = {
        name: "",
        email: "",
        hotelName: "hotel-A",
        hotelLocation: "ARG"
    }
    changeNameEvent = (syntheticEvent) => {
        this.setState({
            name: syntheticEvent.target.value.toUpperCase()
        });
    }
    changeEmailEvent = (syntheticEvent) => {
        this.setState({
            email: syntheticEvent.target.value
        });
    }
    changeHotelNameEvent = (syntheticEvent) => {
        console.log(syntheticEvent)
        this.setState({
            hotelName: syntheticEvent.target.value
        });
    }
    changeHotelLocationEvent = (syntheticEvent) => {
        console.log(syntheticEvent)
        this.setState({
            hotelLocation: syntheticEvent.target.value
        });
    }
    submitHotelGuest = (syntheticEvent) => {
        syntheticEvent.preventDefault();
        console.log("Guest name: ", this.state.name);
        console.log("Guest email: ", this.state.email);
        console.log("Hotel name: ", this.state.hotelName);
        console.log("Hotel location: ", this.state.hotelLocation);
    }
    render() {
        const hotelGuestJsx = (
            <div>
                <form onSubmit={this.submitHotelGuest}>
                    <div className="label">
                        Name:
                        <input type="text" value={this.state.name} onChange={this.changeNameEvent} />
                    </div>
                    <div className="label">
                        Email:
                        <input type="text" value={this.state.email} onChange={this.changeEmailEvent} />
                    </div>
                    <div className="label">
                        Hotel name:
                        <select value={this.state.hotelName} onChange={this.changeHotelNameEvent}>
                            <option value="hotel-A">hotel A</option>
                            <option value="hotel-B">hotel B</option>
                            <option value="hotel-C">hotel C</option>
                        </select>
                    </div>
                    <div className="label">
                        Hotel location:
                        <input type="text" value={this.state.hotelLocation} onChange={this.changeHotelLocationEvent} />
                    </div>
                    <input type="submit" value="submit form" />
                </form>
            </div>
        );
        return hotelGuestJsx;
    }
}
ReactDOM.render(<HotelGuest />, document.getElementById("react-forms-multiple-components"));