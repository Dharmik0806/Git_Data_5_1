// first 
import React, { Component } from 'react';
import SubCourse1 from './Subcourse1';

class Course extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CourseName : "ReactJS"
        }
    }
    
    changeCourse = () => {
        this.setState({
            CourseName : "NodeJS"
        })
    }
    render() {
        return (
            <div>
                <h1>Course Name : {this.state.CourseName}</h1>
                <button onClick={this.changeCourse}> Change Course</button>

                <SubCourse1 course={this.state.CourseName} />
                            {/* props => course */}
            </div>
        );
    }
}
export default Course;

