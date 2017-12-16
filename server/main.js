//only executed on the server
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import {Employees} from '../imports/collections/employee'
import {image, helpers} from 'faker';

Meteor.startup(() => {
  // code to run on server at startup hence great place to generate data
  //check if data already exists
  //count the number of records in database
  const numberRecords = Employees.find({}).count();
  //specify the filter options in find, here no filter required
  console.log(numberRecords);
  if(!numberRecords){
    //generate the records using faker
    
    _.times(5000, ()=>{
      const {name, email, phone} = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      }); //name, email,... equivalent to name:name, email:email,...
    });
    
  }

  Meteor.publish('employees', function(){
    return Employees.find({},{limit:20});
  });
});
