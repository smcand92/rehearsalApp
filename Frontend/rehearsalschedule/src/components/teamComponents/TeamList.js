import React from 'react';
import Team from './Team.js';



const TeamList = (props) => {

  const teams = props.teams.map((team) => {
    console.log("teamlist props", props);
		 	return (<li key={team.id} className="component-item">
				<Team team={team} handleEditClick={props.handleEditClick}/>
			</li>
		)
      console.log("teamlist team", team);
		})


  return (
    <div>
      <ul className="component-list">
        {teams}
        </ul>
    </div>
  )


}


export default TeamList;
