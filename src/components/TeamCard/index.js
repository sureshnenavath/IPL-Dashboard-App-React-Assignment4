import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({eachItem}) => {
  const {id, name, teamImageUrl} = eachItem

  return (
    <Link to={`/team-matches/${id}`} className="team-card">
      <li className="team-card-item">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
