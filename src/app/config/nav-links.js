import React from "react";
import {
    FaDashboard,
    FaUser,
    FaBook
} from 'react-icons/lib/fa';

export default {
    links: [
        {
            key: 1,
            name: 'Dashboard',
            link: '/app/dashboard',
            icon: <FaDashboard/>
        },
        {
            key: 2,
            name: 'Profile',
            link: '/app/profile',
            icon: <FaUser/>
        },
        {
            key: 3,
            name: 'Courses',
            link: '/app/courses',
            icon: <FaBook/>
        },
    ]
}