import React, {Component} from 'react';
import EmployeeServices from "../services/EmployeeServices";
class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state={
            employees:[]
        }
    }
    componentDidMount() {
        EmployeeServices.getEmployees().then((res)=>{
            this.setState({
                employees:res.data
            })
        });
    }

    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-md-6 text-center">
                        <table className={'table table-bordered'}>
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>Employee Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                        <tr key = {employee.eid}>
                                            <td>{employee.eid}</td>
                                            <td>{employee.ename}</td>
                                            <td>{employee.esal}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EmployeeList;