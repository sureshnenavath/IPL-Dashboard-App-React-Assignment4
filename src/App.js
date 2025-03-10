import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import {Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} /> <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
