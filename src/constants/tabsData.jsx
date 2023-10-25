import React from 'react';
import { FaHouse, FaFaceSmile, FaFileLines, FaCode, FaEnvelope } from "react-icons/fa6";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    }
}
export const tabsData = () => {
    const tabs = [
        { label: 'صفحه اصلی', icon: <FaHouse />, ...tabProps(0) },
        { label: 'درباره من', icon: <FaFaceSmile />, ...tabProps(1) },
        { label: 'رزومه من', icon: <FaFileLines />, ...tabProps(2) },
        { label: 'نمونه کارها', icon: <FaCode />, ...tabProps(3) },
        { label: 'ارتباط با من', icon: <FaHouse />, ...tabProps(4) },
    ];
    return tabs;
}

