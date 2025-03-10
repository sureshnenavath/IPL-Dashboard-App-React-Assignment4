// Write your code here
import './index.css'
const LatestMatch = ({latestMatchDetails}) => {
  return (
    <div className="latest-match-card">
      <div>
        <h1>Team Name</h1>
        <p>{latestMatchDetails.date}</p>
        <p>{latestMatchDetails.venue}</p>
        <p>{latestMatchDetails.result}</p>
      </div>
      <div>
        <img src="logo" alt="match logo" />
      </div>
      <div>
        <p>First Inning</p>
        <p>Emplyer</p>
        <p>Date</p>
        <p>venue</p>
      </div>
    </div>
  )
}
export default LatestMatch
