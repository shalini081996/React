import { useRouteError } from "react-router";

const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div><h1>OOPS something went wrong!!!</h1></div>
    )
}

export default ErrorComponent;