interface TitleProps {
  title : string
}

function Title( {title} : TitleProps) {
  return (
    <div >
      <h1 className="uppercase font-bold text-3xl text-center ">
        {title}
      </h1>
    </div>
  )
}

export default Title
