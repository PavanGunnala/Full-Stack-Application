import React, {Component} from 'react';
import EmployeeServices from "../services/EmployeeServices";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
           employee:{
               eid:"",
               ename:"",
               esal:""
           }
        }
    }
    updateInput=(event)=>{
        this.setState({
            employee:{
                ...this.state.employee,
                [event.target.name]:event.target.value
            }
        })
    }
    registerEmployee = (event)=>{
        event.preventDefault()
        EmployeeServices.addEmployee(this.state.employee).then((res)=>{
            alert("Employee added");
        }).catch(error=>{
            alert(error);
        })
    }

    render() {
        return (
            <React.Fragment>

                <pre>{JSON.stringify(this.state.employee)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                        <h3>Register Here</h3>
                                </div>
                                <div className="card-body">
                                    <form >
                                        <div className="form-group">
                                            <input onChange={this.updateInput}
                                                   name={'eid'}
                                                   value={this.state.eid}
                                                type={'number'} className={'form-control'} placeholder={'Employee Id'}/>
                                        </div>
                                        <div className="form-group">
                                            <input name={'ename'}
                                                   onChange={this.updateInput}
                                                type={'text'} className={'form-control'} placeholder={'Employee Name'}/>
                                        </div>
                                        <div className="form-group">
                                            <input name={'esal'}
                                                onChange={this.updateInput}
                                                type={'number'} className={'form-control'} placeholder={'Employee Salary'}/>
                                        </div>
                                        <div className="form-group">
                                            <input type={'submit'} onClick={this.registerEmployee} className={'btn btn-sm btn-primary'} value={'Register'}/>

                                        </div>
                                   </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;