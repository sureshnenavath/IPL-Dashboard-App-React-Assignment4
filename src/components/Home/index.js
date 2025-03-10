import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'
import Loader from 'react-loader-spinner'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()

    const newData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      teamsData: newData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, teamsData} = this.state
    return (
      <div className="home-container">
        <div className="home-header">
          <img
            className="home-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        <ul className="ul-teams-container">
          {isLoading ? (
            <div className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsData.map(eachItem => (
              <TeamCard key={eachItem.id} eachItem={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
