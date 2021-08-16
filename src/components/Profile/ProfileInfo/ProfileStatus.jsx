import React from 'react';


class ProfileStatus extends React.Component {
    // if (!props.profile) {
    //     return <div>
    //         <Preloader/>
    //     </div>
    // }
    state = {
        editMode: false,
        job: this.props.job
    };
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateJob(this.state.job);
    };
    onStatusJob=(e)=>{
      this.setState({
          job:e.currentTarget.value
      })
    }
    render() {
        return (<div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.job || 'please write status'} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusJob} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.job}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;
