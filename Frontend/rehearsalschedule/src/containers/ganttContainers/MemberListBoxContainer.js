import React, {Component} from 'react'
import MemberListComponent from "../../components/ganttComponents/MemberListComponent";

class MemberListBoxContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.getMembers()
    }


    getMembers(){
        let newArray = [];
        for(let task of this.props.chartData){
            for(let members of task.members) {
                newArray.push(members);
            }
        }
        newArray.flat(1);
        console.log("getMembers:", newArray);
        this.state.data = newArray;
    }


    componentDidMount() {
        this.getMembers();
    }


    render() {
        return (
            <div>
                <MemberListComponent members={this.state.data}/>
            </div>
        );
    }


}

export default MemberListBoxContainer;