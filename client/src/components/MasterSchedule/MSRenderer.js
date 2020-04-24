import React from "react";
import "./MSRenderer.css";
import Moffitt from "./Moffitt";
import Moffitt4 from "./Moffitt4";
import Doe from "./Doe";
import leftArrow from "./MasterImages/leftarrow.svg";
import rightArrow from "./MasterImages/rightarrow.svg";

function dateObject(day, hour) {
  var dateObject = new Date();
  dateObject.setHours(hour, 0, 0, 0);
  var dayOfWeek = dateObject.getDay();
  var diff = dayOfWeek - day;
  var newDate = dateObject.getDate() - diff;
  dateObject.setDate(newDate);
  return dateObject;
}

export default class MSRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{}],
      typeOfLibrary: "moffitt3",
      currentWeek: dateObject(0, 0),
    };
    this.showMoffitt = this.showMoffitt.bind(this);
    this.showMoffitt4 = this.showMoffitt4.bind(this);
    this.showDoe = this.showDoe.bind(this);

    this.previousWeek = this.previousWeek.bind(this);
    this.nextWeek = this.nextWeek.bind(this);
  }

  showMoffitt() {
    this.setState({ typeOfLibrary: "moffitt3" });
  }

  showMoffitt4() {
    this.setState({ typeOfLibrary: "moffitt4" });
  }

  showDoe() {
    this.setState({ typeOfLibrary: "doe" });
  }

  previousWeek() {
    console.log("inpreviousweek");
    let currStartDate = new Date(this.state.currentWeek);
    currStartDate.setDate(currStartDate.getDate() - 7);
    this.setState({ currentWeek: currStartDate });
  }

  nextWeek() {
    console.log("innextweek");
    let currStartDate = new Date(this.state.currentWeek);
    currStartDate.setDate(currStartDate.getDate() + 7);
    this.setState({ currentWeek: currStartDate });
  }

  render() {
    let typeOfLibrary = this.state.typeOfLibrary;
    let pending;
    let moffitt;
    let moffitt4;
    let doe;
    console.log("week", this.state.currentWeek);
    if (typeOfLibrary === "moffitt3") {
      pending = <Moffitt currWeek={this.state.currentWeek} />;
      moffitt = "clickedButton";
      moffitt4 = "nonClickedButton";
      doe = "nonClickedButton";
    } else if (typeOfLibrary === "moffitt4") {
      pending = <Moffitt4 />;
      moffitt = "nonClickedButton";
      moffitt4 = "clickedButton";
      doe = "nonClickedButton";
    } else if (typeOfLibrary === "doe") {
      pending = <Doe />;
      moffitt = "nonClickedButton";
      moffitt4 = "nonClickedButton";
      doe = "clickedButton";
    } else {
      pending = null;
    }

    let startMonth = this.state.currentWeek.getMonth() + 1;
    let startDate = this.state.currentWeek.getDate();

    let endDate = new Date(this.state.currentWeek);
    endDate.setDate(endDate.getDate() + 7);

    let endDateNum = endDate.getDate();
    let endDateMonth = endDate.getMonth() + 1;

    return (
      <div className="everythingMS">
        <div classname="masterScheduleAndButtons">
          <div className="masterScheduleText">Master Schedule</div>
          <div className="currentWeek">
            {startMonth}/{startDate} - {endDateMonth}/{endDateNum}
          </div>
          <div className="arrows">
            <button className="buttonLeftArrow">
              <img
                className="leftArrow"
                onClick={this.previousWeek}
                src={leftArrow}
                alt="leftArrow"
              />
            </button>
            <button className="buttonRightArrow">
              <img
                className="rightArrow"
                onClick={this.nextWeek}
                src={rightArrow}
                alt="rightArrow"
              />
            </button>
          </div>
          <div className="buttons">
            <button className={moffitt} onClick={this.showMoffitt}>
              <h1>Moffitt 3rd</h1>
            </button>
            <button className={moffitt4} onClick={this.showMoffitt4}>
              <h1>Moffitt 4th</h1>
            </button>
            <button className={doe} onClick={this.showDoe}>
              <h1>Doe</h1>
            </button>
          </div>
        </div>

        <div className="weekdayBox">
          <div className="weekdayText">
            <div className="sunday">Sunday</div>
            <div className="monday">Monday</div>
            <div className="tuesday">Tuesday</div>
            <div className="wednesday">Wednesday</div>
            <div className="thursday">Thursday</div>
            <div className="friday">Friday</div>
            <div className="saturday">Saturday</div>
          </div>
        </div>
        <div className="boxesAndDates">
          <div className="hours">
            <div className="hour">12 AM</div>
            <div className="hour">1 AM</div>
            <div className="hour">2 AM</div>
            <div className="hour">3 AM</div>
            <div className="hour">4 AM</div>
            <div className="hour">5 AM</div>
            <div className="hour">6 AM</div>
            <div className="hour">7 AM</div>
            <div className="hour">8 AM</div>
            <div className="hour">9 AM</div>
            <div className="hour">10 AM</div>
            <div className="hour">11 AM</div>
            <div className="hour">12 PM</div>
            <div className="hour">1 PM</div>
            <div className="hour">2 PM</div>
            <div className="hour">3 PM</div>
            <div className="hour">4 PM</div>
            <div className="hour">5 PM</div>
            <div className="hour">6 PM</div>
            <div className="hour">7 PM</div>
            <div className="hour">8 PM</div>
            <div className="hour">9 PM</div>
            <div className="hour">10 PM</div>
            <div className="hour">11 PM</div>
          </div>
          {pending}
        </div>
      </div>
    );
  }
}
