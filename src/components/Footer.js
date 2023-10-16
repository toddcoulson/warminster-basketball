import {Link} from 'gatsby'
import React, {useState, useEffect} from 'react'
import * as styles from '../styles/footer.module.css';
import { StaticImage } from "gatsby-plugin-image"

export default function Footer(){

  const [randSponsors, setRandSponsors] = useState([])
  const checkRandom = (val)=>{
    let flag = false;
    randSponsors.forEach((elem)=>{
      if(elem?.includes(val)) flag = true;
    })
    return flag;
  }
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
      // console.log(sponsorArray, sponsorArray.length)
      let passArray = sponsorArray.splice(Math.floor(Math.random() * sponsorArray.length-1), 1);
      selected.push(passArray[0]);
    }
    
    setRandSponsors(selected)
  }, [])
  
  return (
    <footer>
    <p>Warminster Basketball Association</p>
    <Link activeClassName="active" to="/sponsors"> 
      <div className={styles.sponsor}>
      <StaticImage
          style={checkRandom("BentonMechanical")? { display: 'inline-block' }:{display:'none'}}
          src="../sponsors/BentonMechanical.jpg"
          alt="Benton Mechanical"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={193/92}
          width={75}
        />
       <StaticImage
          style={checkRandom("FTSFlooring")? { display: 'inline-block' }:{display:'none'}}
          src="../sponsors/FTSFlooring.jpg"
          alt="FTS Flooring"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={118/73}
          width={75}
        />
      <StaticImage
          style={checkRandom("JJAutoAndTruck")? { display: 'inline-block' }:{display:'none'}}
          src="../sponsors/JJAutoAndTruck.jpg"
          alt="JJ Auto And Truck"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={200/200}
          width={75}
        />
      <StaticImage
      style={checkRandom("JMLMachining")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/JMLMachining.jpg"
        alt="JML Machining"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={166/168}
        width={75}
      />
      <StaticImage
      style={checkRandom("JohnsonSons")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/JohnsonSons.jpg"
        alt="Johnson Sons"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={152/50}
        width={75}
      />
      <StaticImage
      style={checkRandom("LegacyBuxmont")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/LegacyBuxmont.jpg"
        alt="Legacy Buxmont"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={154/128}
        width={75}
      />
      <StaticImage
      style={checkRandom("MikesBnG")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/MikesBnG.jpg"
        alt="Mikes Bar and Grill"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/102}
        width={75}
      />
      <StaticImage
      style={checkRandom("NicksDeli")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/NicksDeli.jpg"
        alt="Nick's Deli"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/39}
        width={75}
      />
      <StaticImage
      style={checkRandom("Nissan")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/Nissan.jpg"
        alt="Nissan"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={118/73}
        width={75}
      />
      <StaticImage
      style={checkRandom("JohParadigmnsonSons")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/Paradigm.jpg"
        alt="Paradigm"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={1/1}
        width={75}
      />
      <StaticImage
      style={checkRandom("TheAugustineGroup")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/TheAugustineGroup.jpg"
        alt="The Augustine Group"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={114/180}
        width={75}
      />
      <StaticImage
      style={checkRandom("WarminsterFlag")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/WarminsterFlag.jpg"
        alt="Warminster Flag"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={168/88}
        width={75}
      />
      <StaticImage
      style={checkRandom("WarminsterPioneersFBandCheer")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/WarminsterPioneersFBandCheer.jpg"
        alt="Warminster Pioneers Football Band and Cheerleading"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={140/172}
        width={75}
      />
      <StaticImage
      style={checkRandom("WPDbenevolent")? { display: 'inline-block' }:{display:'none'}}
        src="../sponsors/WPDbenevolent.jpg"
        alt="WPD benevolent"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={132/190}
        width={75}
      />
        
      </div>
      </Link>
      </footer>
  )
};