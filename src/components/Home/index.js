import Navbar from "../Navbar"
import QuizCard from "../QuizCard"
import "./index.css"

const Home=()=>{
    return(
        <>
        <Navbar />
        <QuizCard value={false}/>
        </>
    )
}

export default Home