import React, { Component } from 'react'

class Roles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roles: ['recruitor', 'developer', 'explorer'],
            role: 'recruitor'
        }
    }

    setRole = (event) => {
        const parent = event.currentTarget;
        const index = parseInt(parent.id, 10);
        this.setState(
            { role: this.state.roles[index] },
            () => this.props.roleChange(this.state.role)
        );
    }

    render() {
        return (
            <div className="roles">
                <div className="role" onClick={this.setRole} id='0'>
                    <div className="profile-icon" id="recruitor"></div>
                    <h2>Recruitor</h2>
                </div>
                <div className="role" onClick={this.setRole} id='1'>
                    <div className="profile-icon" id="developer"></div>
                    <h2>Developer</h2>
                </div>
                <div className="role" onClick={this.setRole} id='2'>
                    <div className="profile-icon" id="explorer"></div>
                    <h2>Explorer</h2>
                </div>
            </div>
        )
    }
}

export default Roles
