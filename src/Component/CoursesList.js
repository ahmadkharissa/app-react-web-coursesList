import React, { Component, Fragment } from 'react';

class CorsesList extends Component {

    state = {
        isEdite: false
    }

    renderCourse = () => {
        return (
            <li>
                <span> {this.props.course.name} </span>
                <button onClick={() => this.toggleState()}> Edite </button>
                <button onClick={() => this.props.handleDelete(this.props.index)}> Delete </button>
            </li>
        )
    }

    toggleState = () => {
        let {isEdite} = this.state;
        this.setState({
            isEdite: !isEdite
        })
    }

    editeFormsCourse = (e) => {
        e.preventDefault();
        this.props.editeForms(this.props.index, this.input.value);
        this.toggleState();
    }

    renderUpdateForm = () => {
        return(
            <form onSubmit={this.editeFormsCourse}>
                <input type="text" ref={v => {this.input = v}} defaultValue={this.props.course.name}/>
                <button> Update </button>
            </form>
        )
    }

    render() {
        let {isEdite} = this.state;
        return (
            <Fragment>
                {isEdite ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        );
    }
}

export default CorsesList;