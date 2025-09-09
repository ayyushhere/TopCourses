import Filter from './components/Filter'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Spinner from './components/Spinner'
import { useState, useEffect } from 'react'
import { apiUrl, filterData } from './data'
import { toast } from 'react-toastify'

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat h mere bhai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-blue-800'>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} />)
        }
      </div>
    </div>
  )
}

export default App
