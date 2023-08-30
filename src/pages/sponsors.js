import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import LayoutNoFooter from "../components/LayoutNoFooter"

export default function announcements({data}) {
  //const sponsors = data.allFile.nodes.filter((item)=>item.relativePath.includes('sponsors'))
  //console.log(data.allFile.nodes, sponsors)
  return (<>
    <LayoutNoFooter>
    <div className='sponsorGrid'>
      <a href='https://www.manta.com/c/mhbtr5c/benton-mechanical-solution-llc' taget='_blank'> 
        <StaticImage
            src="../sponsors/BentonMechanical.jpg"
            alt="Benton Mechanical"
            placeholder="blurred"
            layout="fixed"
            aspectRatio={193/92}
            width={200}
          />
      </a>
      <a href='http://www.ftsflooring.com/' taget='_blank'> 
        <StaticImage
          src="../sponsors/FTSFlooring.jpg"
          alt="FTS Flooring"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={118/73}
          width={200}
        />
      </a>
      <a href='https://www.facebook.com/jandjautoandtruckrepairs/' taget='_blank'> 
        <StaticImage
          src="../sponsors/JJAutoAndTruck.jpg"
          alt="JJ Auto And Truck"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={200/200}
          width={200}
        />
      </a>
      <a href='https://www.facebook.com/pages/category/Machine-Shop/JML-Machine-260136757747047/' taget='_blank'>
      <StaticImage
        src="../sponsors/JMLMachining.jpg"
        alt="JML Machining"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={166/168}
        width={200}
      />
      </a>
      <a href='https://www.facebook.com/pages/Johnson-M-Sons/158828084149523' taget='_blank'>
      <StaticImage
        src="../sponsors/JohnsonSons.jpg"
        alt="Johnson Sons"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={152/50}
        width={200}
      />
      </a>
      <a href='https://www.legacybuxmontrealestate.com/' taget='_blank'>
      <StaticImage
        src="../sponsors/LegacyBuxmont.jpg"
        alt="Legacy Buxmont"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={154/128}
        width={200}
      />
      </a>
      <a href='https://www.mikesyorkstreetbarandgrill.com/' taget='_blank'>
      <StaticImage
        src="../sponsors/MikesBnG.jpg"
        alt="Mikes Bar and Grill"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/102}
        width={200}
      /></a>
      <a href='https://www.facebook.com/pages/category/Deli/Nicks-Deli-172974539485956/' taget='_blank'>
      <StaticImage
        src="../sponsors/NicksDeli.jpg"
        alt="Nick's Deli"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/39}
        width={200}
      /></a>
      <a href='https://www.oneilnissan.com/' taget='_blank'>
      <StaticImage
        src="../sponsors/Nissan.jpg"
        alt="Nissan"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={118/73}
        width={200}
      /></a>
      <a href='http://getparadigm.com/' taget='_blank'>
      <StaticImage
        src="../sponsors/Paradigm.jpg"
        alt="Paradigm"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={1/1}
        width={200}
      /></a>
      <a href='https://theaugustineteam.com/' taget='_blank'>
      <StaticImage
        src="../sponsors/TheAugustineGroup.jpg"
        alt="The Augustine Group"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={114/180}
        width={200}
      /></a>
      <a href='https://warminsterfootball.webs.com/' taget='_blank'>
      <StaticImage
        src="../sponsors/WarminsterFlag.jpg"
        alt="Warminster Flag"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={168/88}
        width={200}
      /></a>
      <a href='https://warminsterfootball.webs.com/' taget='_blank'>
      <StaticImage
        src="../sponsors/WarminsterPioneersFBandCheer.jpg"
        alt="Warminster PioneersFootball Band and Cheerleading"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={140/172}
        width={200}
      /></a>
      <a href='https://warminstertownship.org/police/' taget='_blank'>
      <StaticImage
        src="../sponsors/WPDbenevolent.jpg"
        alt="WPD benevolent"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={132/190}
        width={200}
      /></a>
      </div>
    </LayoutNoFooter>
  </>)
}

/*export const query = graphql`
query announcementsPage {
  allFile {       
    nodes {        
      relativePath         
      childImageSharp {         
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
     }
    }
}
`


      
*/
