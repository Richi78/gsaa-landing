interface Props {
  image: string
  title: string
  description: string
}

const BentoItem = ({ image, title, description }: Props) => {
  return (
    <div className="relative col-span-2 sm:flex sm:items-center sm:justify-center sm:even:flex-row-reverse ">
      <img
        src={image}
        alt="Imagen Scout"
        className="opacity-95 sm:w-1/3 rounded-2xl group-hover:scale-110
        transition-all duration-1000 ease-in-out bg-blend-luminosity"
      />
      <div className="p-2 sm:p-12 sm:w-1/3">
        <strong className="text-2xl sm:text-3xl">{title}</strong>
        <p className="">{description}</p>
      </div>
    </div>
  )
}

export default BentoItem
