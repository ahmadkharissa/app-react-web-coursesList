import React from 'react';

const CorsesForm = (props) => {
    
    return (
        <div className="App">
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.current} placeholder="Enter course" id="couse" onChange={props.handleChange} />
                <button> Add </button>
            </form>
        </div>
    );
}

export default CorsesForm;