import { FcLike } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  console.log(course.image.alt)
  return (
    <div>
      <img 
      src={course.image.url} 
      alt={course.image.alt} />
      <div>
        <button>
          <FcLike />
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card