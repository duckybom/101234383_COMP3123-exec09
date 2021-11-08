import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const welcomeMessage = 'Welcome to Full Stack Development';
const labMessage = 'ReactJs Programmin Week 9 Lab Exercise';
const studentId = '101234383';
const name = 'Minh Duc Cung';
const gbcMessage = 'George Brown College , Toronto';

ReactDOM.render(
  <App 
    welcomeMessage = {welcomeMessage}
    labMessage = {labMessage}
    studentId = {studentId}
    name = {name}
    gbcMessage = {gbcMessage}
  />,
  document.getElementById('root'));