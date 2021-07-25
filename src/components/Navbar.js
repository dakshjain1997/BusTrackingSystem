import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar" style={{position: "absolute"}}>
            <div className="applicationTitle">
                <div className="icon">
                    <span className="material-icons-outlined md-32 md-light">directions_bus</span>
                </div>
                <Link className="title" to="/dashboard">School Bus Tracking System</Link>
            </div>

            <div className="addStudentDetails">
                <div className="icon">
                    <span className="material-icons-outlined md-32 md-light">person_add</span>
                </div>
                <Link className="titleOption" to="/studentForm">Student Details</Link>
            </div>

            <div className="addBusAttendant">
                <div className="icon">
                    <span className="material-icons-outlined md-32 md-light">person_add</span>
                </div>
                <Link className="titleOption" to="/launchScan">Bus Attendant Details</Link>
            </div>

            <div className="addBusDetails">
                <div className="icon">
                    <span className="material-icons-outlined md-32 md-light">person_add</span>
                </div>
                <Link className="titleOption" to="/history">Bus Details</Link>
            </div>

            <div className="viewStudentDetails">
                <div className="icon">
                    <span className="material-icons-outlined md-32 md-light">person</span>
                </div>
                <Link className="titleOption" to="/recommendation">Student Details</Link>
            </div>

            <div className="viewBusAttendant">
                <div className="icon">
                    <span className="material-icons-outlined md-32 md-light">person</span>
                </div>
                <Link className="titleOption" to="/settings">Bus Attendant Details</Link>
            </div>

            <div className="viewBusDetails">
                <div className="icon">
                    <span className="material-icons-outlined md-32 md-light">person</span>
                </div>
                <Link className="titleOption" to="/settings">Bus Details</Link>
            </div>
        </div>
    );
}

export default Navbar;
