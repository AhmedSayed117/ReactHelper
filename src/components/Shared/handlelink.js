import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const links = ["/","/profile","/setting","/about"]
const handlelink = (e) => {
    return(
        <div>
            {
                links.map((el,index)=> {
                    if(el!==e)
                    {
                        return (
                                <Link key={index} to={el}>
                                    <Button className='m-1' variant='secondary'>
                                        {
                                            links[index].slice(1)===""?"Home" : links[index].slice(1)
                                        }</Button>
                                </Link>
                        )
                    }else return null
                })
            }
        </div>
    )
}
export default handlelink