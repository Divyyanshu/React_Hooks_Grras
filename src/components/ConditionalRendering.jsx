import { useState } from "react"

function ConditionalRendering() {
    const [login, setLogin] = useState(false);

    function handleClick() {
      setLogin(!login)
    }
    return (
        <div>
            {
                login ? <h1>welcome</h1> : <h1>
                    please login
                </h1>
            }
            <button className="border-2 px-8 py-2 bg-cyan-200" onClick={handleClick}>
                {login ? "log out" : "log in"}
            </button>
        </div>
    )
}

export default ConditionalRendering
