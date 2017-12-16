import {Mongo} from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees'); 
//not export default because multiple variables are to be exported