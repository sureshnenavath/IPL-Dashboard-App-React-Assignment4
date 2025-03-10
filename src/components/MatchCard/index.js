// Write your code here
import './index.css'

const MatchCard = ({eachItem}) => {
  return (
    <li>
      <div className="match-card-list-item">
        <img className="competing-team-logo" src={eachItem.competingTeamLogo} />
        <h1>{eachItem.competingTeam}</h1>
        <p>{eachItem.result}</p>
        <p>{eachItem.matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
