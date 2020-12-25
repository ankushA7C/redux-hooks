import React, { Component } from 'react';
import "./style.css"
import { useSelector } from "react-redux";

export const ReduxStore = () => {
    const storeDetail = useSelector(state => state.details.list);
    //return storeDetail;
    const table = storeDetail.map((data, index) => {
        return (<tr key={index}><>{index}</><td >{data.name}</td>
            <td >{data.flavor}</td></tr>)
    })
    return table;
}


class View extends Component {
    constructor(props) {
        super(props);
    }

    onBack = () => {
        this.props.history.push("/")
    }
    render() {
        return (
            <>
                <div className="list-container">
                    <div className="list-custom">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Serial No</th>
                                    <th>Name</th>
                                    <th>flavor</th>
                                </tr>
                                <ReduxStore />
                            </tbody>
                        </table>

                    </div>
                    <button onClick={this.onBack}>Add Page</button>
                </div>
            </>
        )
    }
}

export default View;