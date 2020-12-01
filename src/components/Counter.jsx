import React, { useState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(5)
    const [counterVisibility, setCounterVisibility] = useState(true)
    
    useEffect(() => {
        setTimeout(counting, 1000)
    }, [count])

    function counting() {
        if (count > 0) {
            setCount(count - 1)

            if (count == 1) {
                props.onFinish()
            }
        } else {
            setCounterVisibility(false)

        }
    }


    if (count > 0) {
        return <div className="counter" >
            <p> Are you ready? </p>
            <p>{count}</p>
        </div>
    } else {
        return <div className="counter"
            style={{
                visibility: counterVisibility ? "visible" : "hidden",
                opacity: counterVisibility ? 1 : 0,
                backgroundColor: "green"
            }}>
            <p className="p-go"> Go!</p>
            <i class="fas fa-flag-checkered"></i>
        </div>
    }
}

export default Counter;