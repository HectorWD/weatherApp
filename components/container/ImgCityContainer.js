import Link from 'next/link'

const ImgCityContainer = ({ url, title,id }) => {
  return (
    <div>
      <Link href={`/location/${id}`}>
      <img
      src={url}
      className='
      w-32 h-32 object-cover 
      m-2 rounded-xl 
      ease-in duration-150
      hover:opacity-80 hover:cursor-pointer'
      />
      </Link>
      <p className="text-center m-2 font-mono text-lg">{title}</p>
    </div>
  )
}
//
export default ImgCityContainer