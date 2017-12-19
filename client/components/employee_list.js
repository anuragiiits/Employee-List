import React from 'react';
import { Employees } from '../../imports/collections/employee';
import { createContainer } from 'meteor/react-meteor-data'
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
    //props.employees => an array of employee objects
    console.log(props.employees);
    return (
        <div>
            <div className="employee-list">
                 {  props.employees.map((employee) => 
                    <EmployeeDetail key={employee._id} employee={employee}/>
                    )}
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