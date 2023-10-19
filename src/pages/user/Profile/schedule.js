import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "~/router/config";
import {AiFillEdit} from 'react-icons/ai'
import {BsCameraFill} from 'react-icons/bs'

const ScheduleProfile = () => {
    return (
        <div className="col-md-10 col-lg-10">
            <div className="title">
            <h3>Quản lý đặt lịch</h3>
            </div>
            <div>Your content</div>
        </div>
    );
}
export default ScheduleProfile;