import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div>
            <h1>404</h1>
            <h2>Not found page</h2>
            <Link to='/'>Voltar para a home</Link>
        </div>
    )
}

export default NotFound;