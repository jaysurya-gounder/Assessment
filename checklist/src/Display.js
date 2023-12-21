import React, { useContext } from 'react'
import { context } from './App'

function Display() {
    const data = useContext(context)
    const { citizen, overage } = data
    return (
        <div>
            <h1>Are you a Citizen?: {(citizen) ? "Yes" : "No"}</h1>
            <h1>Are you over 21?: {(overage) ? "Yes" : "No"}</h1>
        </div>
    )
}

export default Display