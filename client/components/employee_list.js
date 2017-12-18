import React from 'react';
import { Employees } from '../../imports/collections/employee';
import { createContainer } from 'react/react-meteor-data'
const EmployeeList = () => {
    return (
        <div>
            <div className="employee-list">
                EmployeeList
            </div>
        </div>
    )
};

export default createContainer(()=>{
    //set up the subscription
    Meteor.subscribe('employees');

    //return an object. Whatever is returned will be sent to EmployeeList
    // as props
    return {employees: Employees.find({}).fetch()};
}, EmployeeList);