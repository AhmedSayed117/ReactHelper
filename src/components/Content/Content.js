import React, {Component} from 'react';
import "./Content.css"
import Cards from "../Cards/CardDetails/CardDetails";

class Content extends Component {
    // arr = [
    //     {
    //         "id": 1,
    //         "name": 'ahmed',
    //     },
    //     {
    //         "id": 2,
    //         "name": 'sayed',
    //     },
    //     {
    //         "id": 3,
    //         "name": 'hassan',
    //     },
    // ];

    render() {
        const data = this.props;
        // const showItems = (key,index,el)=> <li key={key}>{el}</li>
        return(
            <div>
                <Cards title={data.title} description={data.description} img={data.img} children={data.children}/>
               <br/>
            </div>
        );
    }
}
export default Content
