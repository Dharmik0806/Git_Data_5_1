// secound
import React, { Component } from 'react';
import Fees from './Fees';

class SubCourse1 extends Component {
    render() {
        return (
            <div>
                {
                    this.props.course === "ReactJS" ?
                        <>
                            <span>CoreJs</span>
                            <Fees subCourse={"CoreJs"} />
                            <span>CoreReact</span>
                            <Fees subCourse={"CoreReact"} />
                        </>
                        :
                        <>
                            <span>AdvanceJs</span>
                            <Fees subCourse={"AdvanceJs"} />
                                 {/* props */}
                            <span>CoreNode</span>
                            <Fees subCourse={"CoreNode"} />
                        </>
                }
            </div>
        );
    }
}
export default SubCourse1;
// props na name ma camelcase ma no lakhay
