import {Link} from 'gatsby'
import React, {useState, useEffect} from 'react'
import * as styles from '../styles/footer.module.css';

export default function Footer(){

  const [randSponsors, setRandSponsors] = useState([])
  useEffect(()=>{
    let selected = [];
    const sponsorArray=['BentonMechanical.jpg', 'FTSFlooring.jpg',
                        'JJAutoAndTruck.jpg','JMLMachining.jpg',
                      'JohnsonSons.jpg','LegacyBuxmont.jpg',
                      'MikesBnG.jpg','NicksDeli.jpg',
                      'Nissan.jpg','Paradigm.jpg',
                      'TheAugustineGroup.jpg','WarminsterFlag.jpg',
                      'WarminsterPioneersFBandCheer.jpg','WPDbenevolent.jpg']
    for (let i = 0; i < 3; i++){
      selected.push(sponsorArray.splice(Math.floor(Math.random() * sponsorArray.length), 1));
    }
    setRandSponsors(selected)
  }, [])
  
  return (
      <div className={styles.sponsor}>
        <img id='random1' src={`\\sponsors\\${randSponsors[0]}`}/>
        <img id='random2' src={`\\sponsors\\${randSponsors[1]}`}/>
        <img id='random3' src={`\\sponsors\\${randSponsors[2]}`}/>
      </div>
  )
};