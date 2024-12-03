import { Link } from "react-router-dom"


const PageNotFound = () => {
   



    return (
        <div className="container mt-5">
            <h1>You have gone to the Zoo</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2LV9yJeeWBoqsyhSyV-0ZAUwd3cjcMHdZQ&s" alt="not found" />


            <Link to="/">Go back to Home</Link>
        </div>
    )
}

export default PageNotFound