// third
import React, { Component } from 'react';

class Fees extends Component {
    render() {
        return (
            <div>
                {
                    this.props.subCourse === "CoreJs" ? 10000 :
                        this.props.subCourse === "CoreReact" ? 20000 :
                            this.props.subCourse === "AdvanceJs" ? 30000 :
                                40000
                }
            </div>
        );
    }
}

export default Fees;