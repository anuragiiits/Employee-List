import React, {Component} from 'react';
import { Employees } from '../../imports/collections/employee';
import { withTracker } from 'meteor/react-meteor-data'
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component{
    componentWillMount(){
        this.page=1;
    }
    onClickPage(){
        Meteor.subscribe('employees', PER_PAGE*(this.page+1));
        this.page+=1;
    }
    render(){
    //this.props.employees => an array of employee objects
    //console.log(this.props.employees);
        return (
            <div>
                <h2 className="text text-primary text-center"> My Employees </h2>
                <div className="employee-list well">
                    
                    {  this.props.employees.map((employee) => 
                        <EmployeeDetail key={employee._id} employee={employee}/>
                        )}
                </div>
                <button onClick= {this.onClickPage.bind(this)}
                    className="btn btn-primary">
                    Load more...
                </button>
            </div>
        );
    };
};

export default withTracker(()=>{
    //set up the subscription
    Meteor.subscribe('employees', PER_PAGE); //sends the argument PER_PAGE

    //return an object. Whatever is returned will be sent to EmployeeList
    // as props
    return {employees: Employees.find({}).fetch()};
})( EmployeeList);