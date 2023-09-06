import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://wallpapercave.com/dwp2x/wp10055132.jpg" },
  { url: "https://wallpapercave.com/dwp2x/wp12063291.jpg" },
  { url: "https://wallpapercave.com/dwp2x/wp10930695.jpg" },
  { url: "https://wallpapercave.com/dwp2x/wp12063293.jpg" },
  { url: "https://wallpapercave.com/dwp2x/wp12063294.jpg" },
  { url: "https://wallpapercave.com/dwp2x/wp10930638.jpg" },
  { url: "https://wallpapercave.com/dwp2x/wp8899676.jpg" },
];

export default function ImageSlider() {
  return (
    <div>
      <SimpleImageSlider
        width={'100%'}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  )
}
