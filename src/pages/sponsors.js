import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { StaticImage } from "gatsby-plugin-image"
import LayoutNoFooter from "../components/LayoutNoFooter"

export default function announcements({data}) { 
  const sponsors = data.allFile.nodes.filter((item)=>item.relativePath.includes('sponsors'))
  const sponsorLinks = [{path:'Nissan', link:'https://www.oneilnissan.com/'}, {path:'Paradigm', link:'http://getparadigm.com/'},
  {path:'LegacyBuxmont', link:'https://www.legacybuxmontrealestate.com/'}, {path:'MikeBnG', link:'https://www.mikesyorkstreetbarandgrill.com/'},
  {path:'WarminsterPioneers', link:'https://warminsterfootball.webs.com/'}, {path:'WarminsterFlag', link:'https://warminsterfootball.webs.com/'},
  {path:'NicksDeli', link:'https://www.facebook.com/pages/category/Deli/Nicks-Deli-172974539485956/'}, {path:'JMLMachining', link:'https://www.facebook.com/pages/category/Machine-Shop/JML-Machine-260136757747047/'},
  {path:'TheAugustineGroup', link:'https://theaugustineteam.com/'}, {path:'JohnsonSons', link:'https://www.facebook.com/pages/Johnson-M-Sons/158828084149523'},
  {path:'JJAutoAndTruck', link:'https://www.facebook.com/jandjautoandtruckrepairs/'}, {path:'WPDbenevolent', link:'https://warminstertownship.org/police/'},
  {path:'FTSFlooring', link:'http://www.ftsflooring.com/'}, {path:'BentonMechanical', link:'https://www.manta.com/c/mhbtr5c/benton-mechanical-solution-llc'}]
  const getLink =(path)=>{
    let saveLink = ''
    sponsorLinks.forEach((v) => {
      console.log('values: ',v.path);
      if(path.includes(v.path)) saveLink = v.link;
    })
    console.log(saveLink)
    return saveLink;
  }
  return (<>
    <LayoutNoFooter>
    <div>
    
    {sponsors.map((image, i) => {
      return <a key={i} href={getLink(image.relativePath)} target='_blank'><GatsbyImage className='sponsorImg' image={getImage(image)} alt='' /></a>
    })}
    </div>
    
    </LayoutNoFooter>
  </>)
}

export const query = graphql`
query sponsorsPage {
allFile {       
  nodes {        
    relativePath         
    childImageSharp {         
      gatsbyImageData(width: 130)
    }
   }
  }
}
`

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


 <div className='sponsorGrid'>
      <a taget='_blank' href='https://www.manta.com/c/mhbtr5c/benton-mechanical-solution-llc'> 
        <StaticImage
            src="../sponsors/BentonMechanical.jpg"
            alt="Benton Mechanical"
            placeholder="blurred"
            layout="fixed"
            aspectRatio={193/92}
            width={200}
          />
      </a>
      <a taget='_blank' href='http://www.ftsflooring.com/'> 
        <StaticImage
          src="../sponsors/FTSFlooring.jpg"
          alt="FTS Flooring"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={118/73}
          width={200}
        />
      </a>
      <a taget='_blank' href='https://www.facebook.com/jandjautoandtruckrepairs/'> 
        <StaticImage
          src="../sponsors/JJAutoAndTruck.jpg"
          alt="JJ Auto And Truck"
          placeholder="blurred"
          layout="fixed"
          aspectRatio={200/200}
          width={200}
        />
      </a>
      <a taget='_blank' href='https://www.facebook.com/pages/category/Machine-Shop/JML-Machine-260136757747047/'>
      <StaticImage
        src="../sponsors/JMLMachining.jpg"
        alt="JML Machining"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={166/168}
        width={200}
      />
      </a>
      <a taget='_blank' href='https://www.facebook.com/pages/Johnson-M-Sons/158828084149523'>
      <StaticImage
        src="../sponsors/JohnsonSons.jpg"
        alt="Johnson Sons"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={152/50}
        width={200}
      />
      </a>
      <a taget='_blank' href='https://www.legacybuxmontrealestate.com/'>
      <StaticImage
        src="../sponsors/LegacyBuxmont.jpg"
        alt="Legacy Buxmont"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={154/128}
        width={200}
      />
      </a>
      <a taget='_blank' href='https://www.mikesyorkstreetbarandgrill.com/'>
      <StaticImage
        src="../sponsors/MikesBnG.jpg"
        alt="Mikes Bar and Grill"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/102}
        width={200}
      /></a>
      <a taget='_blank' href='https://www.facebook.com/pages/category/Deli/Nicks-Deli-172974539485956/'>
      <StaticImage
        src="../sponsors/NicksDeli.jpg"
        alt="Nick's Deli"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={172/39}
        width={200}
      /></a>
      <a taget='_blank' href='https://www.oneilnissan.com/'>
      <StaticImage
        src="../sponsors/Nissan.jpg"
        alt="Nissan"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={118/73}
        width={200}
      /></a>
      <a taget='_blank' href='http://getparadigm.com/'>
      <StaticImage
        src="../sponsors/Paradigm.jpg"
        alt="Paradigm"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={1/1}
        width={200}
      /></a>
      <a taget='_blank' href='https://theaugustineteam.com/'>
      <StaticImage
        src="../sponsors/TheAugustineGroup.jpg"
        alt="The Augustine Group"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={114/180}
        width={200}
      /></a>
      <a taget='_blank' href='https://warminsterfootball.webs.com/'>
      <StaticImage
        src="../sponsors/WarminsterFlag.jpg"
        alt="Warminster Flag"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={168/88}
        width={200}
      /></a>
      <a taget='_blank' href='https://warminsterfootball.webs.com/'>
      <StaticImage
        src="../sponsors/WarminsterPioneersFBandCheer.jpg"
        alt="Warminster PioneersFootball Band and Cheerleading"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={140/172}
        width={200}
      /></a>
      <a taget='_blank' href='https://warminstertownship.org/police/'>
      <StaticImage
        src="../sponsors/WPDbenevolent.jpg"
        alt="WPD benevolent"
        placeholder="blurred"
        layout="fixed"
        aspectRatio={132/190}
        width={200}
      /></a>
      </div>     
*/
