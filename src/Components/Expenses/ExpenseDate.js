import React from 'react';

import './ExpenseDate.css'

const ExpenseDate = (props) => {

    const Day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const Month = props.date.toLocaleString('en-US', { month: 'long' })
    const Year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{Day}</div>
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__year">{Year}</div>
        </div>
    );
}

export default ExpenseDate;