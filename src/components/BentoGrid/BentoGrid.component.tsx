import BentoItem from "./BentoItem.component"


const BentoGrid = () => {
  const itemsInfo = [
    {
      id: 1,
      title: "¿Quiénes somos?",
      description: "Somos un grupo de jóvenes y adultos comprometidos con el aprendizaje, la aventura y el servicio, formando líderes a través de valores scouts, actividades al aire libre y trabajo en equipo.",
      image: 'camping.jpg'
    },
    {
      id: 2,
      title: "Nuestras actividades",
      description: "Las actividades scout incluyen campamentos, excursionismo, servicio comunitario, juegos de equipo, aprendizaje de habilidades al aire libre y liderazgo, fomentando el desarrollo personal y el trabajo en equipo. ",
      image: 'constructions.jpg'
    },
    {
      id: 3,
      title: " ¡Ven y descubre el espíritu scout! ",
      description: "Nos reunimos los días sábados por la tarde, contamos lugares de reunión tanto al norte como al sur. ¡Te esperamos para compartir esta gran aventura!",
      image: 'cooking.jpg'
    },
    {
      id: 4,
      title: "Nuestras redes sociales",
      description: "description",
      image: 'trees.jpg'
    },
  ]

  return (
    <div className=" p-5 grid grid-cols-2 border-solid grid-rows-4 sm:gap-16">
      {itemsInfo.map((item) => {
        return (
          <BentoItem key={item.id} title={item.title} description={item.description} image={item.image} />
        )
      })}
    </div>
  )
}

export default BentoGrid
