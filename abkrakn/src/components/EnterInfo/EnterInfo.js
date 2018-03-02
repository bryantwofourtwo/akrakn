import React, {Component} from 'react';
import './Enterinfo.css'

class EnterInfo extends Component {

    state = {
        inputEmail4: "",
        inputPassword4: "",
        inputItemNumber: "",
        inputName: ""
    }

    handleChange = (event) => {
        console.log(event.target.value)
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
        
    }

    handleClick = (event) => {
        event.preventDefault()
        console.log(this.state)
    } 

    render() {
        return (
    <div className="container" id="enterInfo">
        <form>
            <div className="form-row">
                <div className="form-group col-md-8">
                    <label>Email</label>
                    <input type="email" className="form-control" name="inputEmail4" value={this.state.inputEmail4} placeholder="example@aol.com" onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-8">
                    <label>Password</label>
                    <input type="password" className="form-control" name="inputPassword4" value={this.state.inputPassword4}  onChange={this.handleChange} placeholder="*****" />
                </div>
            </div>
                <div className="form-group col-md-8">
                    <label>Enter Item Number</label>
                    <input type="text" className="form-control" name="inputItemNumber" value={this.state.inputItemNumber}  onChange={this.handleChange} placeholder="ASIN #" />
                    <br />
                    <button className="btn btn-outline-dark" onClick={this.handleClick}><span>SEARCH</span></button>
                </div>
                <div className="form-row">
                    <div className="col-md-8">
                    <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <br />
                    <div className="col-md-8">
                    <input type="text" className="form-control" placeholder="Last Name" />                
                    <br />
                    <button type="submit" className="btn btn-outline-dark" onClick={this.handleClick}>Submit</button>
                    </div>
                </div>            
        </form>
    </div>)
    }
   
};

export default EnterInfo;
