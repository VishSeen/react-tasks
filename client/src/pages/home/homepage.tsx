import { FunctionComponent } from "react";
import { Page } from "../../types/Types";

const Homepage: FunctionComponent<Page> = ({
    title
}) => {
    return(
        <>
            <h1>{title}</h1>
        </>
    )
}


export default Homepage;