import { useState, useEffect, Fragment } from "react"

const ErrorState = () => {
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        const tempState = !isChanged;
        setIsChanged(tempState);
      }, [])

    return (
        <Fragment>
            <h1>Cambio de estado</h1>
            <div>{isChanged ? 'TRUE' : 'FALSE'}</div>
        </Fragment>
  )
}

export default ErrorState