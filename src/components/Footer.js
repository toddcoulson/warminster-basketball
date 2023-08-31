import {Link} from 'gatsby'
import React, {useState, useEffect} from 'react'
import * as styles from '../styles/footer.module.css';
import { StaticImage } from "gatsby-plugin-image"

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
    <Link activeClassName="active" to="/sponsors"> 
      <div className={styles.sponsor}>
      
        <StaticImage
            src="../sponsors/BentonMechanical.jpg"
            alt="Benton Mechanical"
            placeholder="blurred"
            layout="fixed"
            aspectRatio={193/92}
            width={75}
          />
       <StaticImage
          src="../sponsors/FTSFlooring.jpg"
          alt="FTS Flooring"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={118/73}
          width={75}
        />
      <StaticImage
          src="../sponsors/JJAutoAndTruck.jpg"
          alt="JJ Auto And Truck"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={200/200}
          width={75}
        />
      <StaticImage
        src="../sponsors/JMLMachining.jpg"
        alt="JML Machining"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={166/168}
        width={75}
      />
      <StaticImage
        src="../sponsors/JohnsonSons.jpg"
        alt="Johnson Sons"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={152/50}
        width={75}
      />
      <StaticImage
        src="../sponsors/LegacyBuxmont.jpg"
        alt="Legacy Buxmont"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={154/128}
        width={75}
      />
      <StaticImage
        src="../sponsors/MikesBnG.jpg"
        alt="Mikes Bar and Grill"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/102}
        width={75}
      />
      <StaticImage
        src="../sponsors/NicksDeli.jpg"
        alt="Nick's Deli"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/39}
        width={75}
      />
      <StaticImage
        src="../sponsors/Nissan.jpg"
        alt="Nissan"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={118/73}
        width={75}
      />
      <StaticImage
        src="../sponsors/Paradigm.jpg"
        alt="Paradigm"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={1/1}
        width={75}
      />
      <StaticImage
        src="../sponsors/TheAugustineGroup.jpg"
        alt="The Augustine Group"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={114/180}
        width={75}
      />
      <StaticImage
        src="../sponsors/WarminsterFlag.jpg"
        alt="Warminster Flag"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={168/88}
        width={75}
      />
      <StaticImage
        src="../sponsors/WarminsterPioneersFBandCheer.jpg"
        alt="Warminster PioneersFootball Band and Cheerleading"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={140/172}
        width={75}
      />
      <StaticImage
        src="../sponsors/WPDbenevolent.jpg"
        alt="WPD benevolent"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={132/190}
        width={75}
      />
        
      </div>
      </Link>
  )
};