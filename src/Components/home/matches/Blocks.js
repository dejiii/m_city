import React, { Component } from 'react';
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../ui/misc";
export default class blocks extends Component {


    state = {
        matches: []
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            // console.log(snapshot.val())
            const matches = firebaseLooper(snapshot);

            this.setState({
                matches: reverseArray(matches)
            })
        })
    }
    

    showMatches = () => (
        <div>
            match
        </div>
    )

    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
