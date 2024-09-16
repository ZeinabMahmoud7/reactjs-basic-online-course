import './image.css'
interface IProps{
    imageUrl:string;
    alt:string;
    className:string;
}

const Image = ({imageUrl,alt,className}:IProps) => {
  return (
    <img src={imageUrl}  alt={alt} className={`${className} try`} />
  )
}
export default Image
