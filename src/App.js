import React, { Component } from 'react';
import CorsesList from './Component/CoursesList'
import CorsesForm from './Component/CourseForm'
import './App.css';

class App extends Component {

  state = {
    courses: [
      { name: 'Html' },
      { name: 'Css' },
      { name: 'Js' }
    ],
    current: ''
  }

  editeForms = (index,value) => {
    let { courses } = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    })
  }

  handleChange = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { courses } = this.state;
    let { current } = this.state;
    if (current === "")
      alert("Enter course");
    else
      courses.push({ name: current });
    this.setState({
      courses,
      current: ''
    })
  }

  handleDelete = (index) => {
    let { courses } = this.state;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  render() {
    const { courses } = this.state;
    const length = courses.length;
    const listCourses = length ? (courses.map((course, index) => {
      return (<CorsesList handleDelete={this.handleDelete} course={course} key={index} index={index} editeForms={this.editeForms}/>) })) : (<p> There is no courses to show</p>)
    
    return (
      <section className="app">
        <h2>Add Couses</h2>
        <CorsesForm current={this.state.current} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <ul>{listCourses}</ul>
      </section>
    );
  }
}

export default App;
