import { Typography } from "@mui/material"
import "./test.css"
import CustomAccordeon from "../styled-components/Accordion.styled.component"

const Quienes = () => {
  return (
    <CustomAccordeon
      title="Holaa"
      details="este es un detalle que te rompera todooo"
      expanded={true}

    />

  )
}

export default Quienes
