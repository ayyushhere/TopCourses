import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    //logic
    if(likedCourses.includes(course.id)){
      //pehle se lke hua para h
      setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)) );
      toast.warning("Like removed");
    }
    else{
      // pehle se like nahi h
      // insert karna h ye course like course me 
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        //non-empty pehle se
        setLikedCourses(((prev) => [...prev, course.id]));
      }
      toast.success("Liked Succesfully");
    }
  }

  return (
    <div className="w-[300px] bg-black text-white rounded-md overflow-hidden">
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.image.alt} />
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-2 grid place-items-center">
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize={"1.50rem"}/>) : (<FcLikePlaceholder fontSize={"1.50rem"}/>)
            }
          </button>
        </div>
      </div>
      <div className="p-4 ">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="text-white overflow-auto mt-2">{course.description}</p>
      </div>
    </div>
  )
}

export default Card