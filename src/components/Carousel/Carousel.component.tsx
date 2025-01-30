import { useEffect, useState } from "react"
import { CarouselImg } from "./styled-components/Carousel.styled.component"
import { IconButton } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
  images: string[];
  showButtons?: boolean;
  autoplay?: boolean;
}

const Carousel = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(props.images[0])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (props.autoplay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 5000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? index < images.length - 1 : index > 0;
      const nextIndex = next ? (condition ? index + 1 : 0) : (condition ? index - 1 : images.length - 1)
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, props.images)
  }

  return (
    <div className="flex">
      <IconButton color="primary" onClick={previous}>
        <ArrowBackIosIcon />
      </IconButton>
      <div className="grow flex h-full">
        <CarouselImg src={selectedImage} alt="Richi" onLoad={() => setLoaded(true)} className={loaded ? "loaded" : ""} />
      </div>
      <IconButton color="primary" onClick={next}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  )
}

export default Carousel
