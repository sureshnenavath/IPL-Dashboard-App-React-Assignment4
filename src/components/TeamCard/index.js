import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplTeamDetails} = props
  const {id, name, teamImageUrl} = iplTeamDetails

  return (
    <li className="teamcard-list-container">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <img src={teamImageUrl} alt={name} className="teamcard-images" />
        <p className="team-card-heading">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
