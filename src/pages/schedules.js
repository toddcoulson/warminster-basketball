import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import DropDown from '../components/DropDown';
import * as styles from '../styles/events.module.css';

export default function Information({data}) {
  const [events, setEvents] = React.useState([])
  const compareDates = (a, b) => {
    if (a.dateTime < b.dateTime) { return -1; }
    if (a.dateTime > b.dateTime) { return 1; }
    return 0;
}
  const handleGirls8Travel = () => {
    const filterIt = data.allContentfulGame.nodes.sort(compareDates).filter(val =>{
      return val.gameType === 'girls8travel'
    })
    setEvents([...filterIt])
  };

  const handleGirls8Intra = () => {
    const filterIt = data.allContentfulGame.nodes.sort(compareDates).filter(val =>{
      return val.gameType === 'girls8intra'
    })
    setEvents([...filterIt])
  };
  const handleBoys8Travel = () => {
    const filterIt = data.allContentfulGame.nodes.sort(compareDates).filter(val =>{
      return val.gameType === 'boys8travel'
    })
    setEvents([...filterIt])
  };

  const handleBoys8Intra = () => {
    const filterIt = data.allContentfulGame.nodes.sort(compareDates).filter(val =>{
      return val.gameType === 'boys8intra'
    })

    setEvents([...filterIt])
  };
  const formatDate = (val)=>{
    const date = new Date(val);
    let dStr = date.toLocaleDateString("en-US");
    dStr += ' '+("00" + (date.getHours()%12)).slice(-2)+':'+("00" + date.getMinutes()).slice(-2)+' ';
    date.getHours()>11 ? dStr += 'PM' : dStr += 'AM'
    return dStr;
  }

  const checkPastGame = (obj) => {
    const ckDate = new Date(obj.dateTime);
    const today = new Date();
    return today > ckDate;
  }
  
  return <>
  <Layout>
  <div id={styles.containAll}>
  <div id='dropContain'>
    <DropDown
      trigger={<button>Teams</button>}
      menu={[
        <button onClick={handleGirls8Travel}>Girls 8-9</button>,
        <button onClick={handleBoys8Travel}>Boys 8-9</button>,
      ]}
    />
    <DropDown
      trigger={<button>Leagues</button>}
      menu={[
        <button onClick={handleGirls8Intra}>Girls 8-9</button>,
        <button onClick={handleBoys8Intra}>Boys 8-9</button>,
      ]}
    />
  </div>
  <div id={styles.displayEvents}>
  <div className={styles.gameHeaderRow} key='head'>
      <div className={styles.gameHeaderCell +' '+styles.dateTime}>Date Time</div>
      <div className={styles.gameHeaderCell +' '+styles.dateTimelocation}>Location/Score</div> 
        
      <div className={styles.gameHeaderCell +' '+styles.opponent}>Teams</div>
      <div className={styles.gameHeaderCell +' '+styles.details}>Details</div>
    </div>
  {events.map((event, i) => 
    <div className={styles.gameRow} key={i}>
      <div className={styles.gameCell +' '+styles.dateTime}>{formatDate(event.dateTime)}</div>
      {
        !checkPastGame(event)? 
        <div className={styles.gameCell +' '+styles.dateTimelocation}><a href={`https://www.google.pl/maps/place/${event.location.lat},${event.location.lon}/@${event.location.lat},${event.location.lon},15z`} target="_blank">Google Map</a></div> : 
        <div className={styles.gameCell +' '+styles.score}>{event.score}</div>
      }
      <div className={styles.gameCell +' '+styles.opponent}>{event.awayTeam} vs. {event.homeTeam}</div>
      <div className={styles.gameCell +' '+styles.details}>{event.details.details}</div>
    </div>
  )}
  </div>
  </div>
</Layout>
  </>
}
export const query = graphql`
query schedulesPage {
  allContentfulGame {
    nodes {
      dateTime
      id
      details {
        details
      }
      location {
        lat
        lon
      }
      gameType
      homeTeam
      awayTeam
      contentful_id
      score
    }
  }
}
`