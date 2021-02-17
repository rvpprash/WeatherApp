import React from 'react';
export default class DateBuilder {
    static formatDate = (today) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = today.getDay();
        const dateValue = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        return (`${days[day]} ${dateValue}, ${months[month]} ${year}`);
    }
}