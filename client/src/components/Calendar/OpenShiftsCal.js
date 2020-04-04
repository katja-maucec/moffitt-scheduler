import React from "react";
import "./OpenShiftsCal.css";
import { format, startOfWeek, endOfWeek, addDays } from "date-fns";
import Modal from "react-modal";

function Timeslot(props) {
  if (props.id != null) {
    return (
      <div class="open-shift" style={{ backgroundColor: props.color }}>
        <AddEmployee />
      </div>
    );
  } else {
    return (
      <div
        class="not-open-shift"
        style={{ backgroundColor: props.color }}
      ></div>
    );
  }
}

function refreshPage() {
  window.location.reload();
  return;
}

function AddEmployee() {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#black";
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  var subtitle;

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      width: "25%",
      height: "35%",
      transform: "translate(-50%, -50%)",
      overflow: 0,
    },
  };

  return (
    <div>
      <button className="AddButton" onClick={openModal}>
        <div className="a">aaaaaaaaaaa</div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {" "}
        <div>
          <h1
            className="AddEmpText"
            ref={(_subtitle) => (subtitle = _subtitle)}
          ></h1>
        </div>
        <div className="question">Would you like to cover this shift?</div>
        <div className="location">Location: Moffitt</div>
        <div className="startTime">Start Time: 1:00PM </div>
        <div className="endTime">End Time: 3:00PM</div>
        {/* need to pull the location, start time, and end time from database */}
        <div className="buttonContainer">
          <button className="YesButton" onClick={refreshPage}>
            <div className="YesText">
              <h4> Yes</h4>
            </div>
          </button>
          <button className="NoButton" onClick={refreshPage}>
            <div className="NoText">
              <h4>No</h4>
            </div>
          </button>
        </div>
      </Modal>
    </div>
  );
}

class Shift {
  constructor(color, id, start, end, day) {
    this.color = color;
    this.id = id;
    this.start = start;
    this.end = end;
    this.day = day;
  }
}

function initialShifts() {
  let a = [];
  for (var i = 0; i < 168; i += 1) {
    a.push(new Shift("#f8f8f8", null, null, null, null));
  }
  let count = 0;
  for (var i = 0; i <= 23; i += 1) {
    for (var j = 0; j <= 6; j += 1) {
      a[count].start = i;
      a[count].end = i + 1;
      a[count].day = j;
      count += 1;
    }
  }
  return a;
}

var currentDate = new Date();
var weekString =
  format(currentDate, "MMMM") +
  " " +
  format(currentDate, "YYYY") +
  ": " +
  format(startOfWeek(currentDate), "MM/DD") +
  " - " +
  format(endOfWeek(currentDate), "MM/DD");

export default class OpenShiftsCal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shifts: initialShifts() };
  }

  componentDidMount() {
    fetch("/openshifts/" + this.props.userId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: this.state.shifts,
        userId: this.props.userId,
      }),
    })
      .then((response) => {
        console.log("response");
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse.shifts);
        this.setState({ shifts: jsonResponse.shifts });
      });
  }

  render() {
    const hours = [
      "12am",
      "1am",
      "2am",
      "3am",
      "4am",
      "5am",
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
      "7pm",
      "8pm",
      "9pm",
      "10pm",
      "11pm",
    ];

    /* Displays the wkdays header.
     */
    const wkdays = [];
    for (var i = 0; i < 7; i += 1) {
      wkdays.push(
        <div class="item-wday1">
          {format(addDays(startOfWeek(currentDate), i), "dd MM/DD")}
        </div>
      );
    }

    /*Every 8th element should be an "item-hours1" header,
      while every 1-7th element should be a shift cell.
    */
    const timeslots = [];
    for (var i = 0, ti = 0; i < 192; i += 1) {
      if (i % 8 == 0) {
        timeslots.push(<div class="item-hours">{hours[i / 8]}</div>);
      } else {
        timeslots.push(
          <Timeslot
            color={this.state.shifts[ti].color}
            id={this.state.shifts[ti].id}
          />
        );
        ti += 1;
      }
    }

    return (
      <div id="overall-container1">
        <h1 id="yourshifts1">Open Shifts</h1>
        <div id="schedule-container-st1">
          <div id="frontWords1">
            <h1 id="weekString1">{weekString}</h1>
          </div>
          <div id="legend1">
            <div id="libtag1">
              <h3 id="findingspace1">Moffitt&nbsp;&nbsp;</h3>
              <div id="moffittcolor1"></div>
            </div>
            <div id="libtag1">
              <h3 id="findingspace1">Doe&nbsp;&nbsp;</h3>
              <div id="doecolor1"></div>
            </div>
          </div>
          <div id="inner-schedule1">
            <div></div>
            {wkdays}
            {timeslots}
          </div>
        </div>
      </div>
    );
  }
}
