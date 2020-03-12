import React from "react";
import "./SleCalendar.css";
import "./SidebarElement.css";
import "./SidebarElement.js";
import SidebarElement from "./SidebarElement";
import Calendar from "../Calendar/Calendar.js";

function SleCalendar(props) {
  return (
    <div class="everything">
      <div class="line"></div>
      <div className="top-bar">
        <div class="user-box">
          <div class="user-id">
            <div class="user-name">Bianca Lee</div>
            <div class="dropdown-arrow"></div>
            <div class="dropdown-menu">
              <ul>
                <li>View Profile</li>
                <li>Log Out</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar">
        <SidebarElement title="Your Shifts" />
        <SidebarElement title="Open Shifts" />
        <SidebarElement title="Availability" link="/calendar" />
      </div>
      <div class="Calendar">
        <Calendar />
      </div>
    </div>
  );
}

export default SleCalendar;
