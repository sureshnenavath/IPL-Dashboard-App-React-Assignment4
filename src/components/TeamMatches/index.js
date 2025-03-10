import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoadingStatus: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl}/${id}`)
    const data = await response.json()

    const bannerUrl = data.team_banner_url
    const recentMatches = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    this.setState({
      isLoadingStatus: false,
      teamBannerUrl: bannerUrl,
      latestMatchDetails: latestMatchDetails,
      recentMatches: recentMatches,
    })
  }

  render() {
    const {isLoadingStatus, teamBannerUrl, latestMatchDetails, recentMatches} =
      this.state

    return (
      <div className="team-match-main-container">
        {isLoadingStatus ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-container">
            <div>
              <img
                src={teamBannerUrl}
                alt="Team Banner"
                className="team-match-banner"
              />
            </div>
            <p>Latest Match</p>
            <div>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <div>
              <ul className='team-match-ul'>
                {recentMatches.map(eachItem => (
                  <MatchCard eachItem={eachItem} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
