import React, { Component } from 'react';
import CorsesList from './Component/CoursesList'
import CorsesForm from './Component/CourseForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <section className="App">
        <h2>Add Couses</h2>
        <CorsesForm />
        <CorsesList />
      </section>
    );
  }
}

export default App;
