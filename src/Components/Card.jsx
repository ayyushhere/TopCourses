import { FcLike } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  console.log(course.image.alt)
  return (
    <div className="w-[300px] bg-black text-white rounded-md overflow-hidden">
      <div>
        <img
          src={course.image.url}
          alt={course.image.alt} />
      </div>
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