import React, { useState } from 'react'
import TipOption from './TipOption'

const TipCalculator = ({ restaurantName }) => {
    const [amount, setAmount] = useState(0)
    const [selectedTip, setSelectedTip] = useState(15);
    const [totalPeople, setTotalPeople] = useState(1)

    const numericAmount = parseFloat(amount) || 0
    const tipAmount = numericAmount * (selectedTip / 100)
    const total = numericAmount + tipAmount
    const perPerson = total / totalPeople

    return (
        <div>
            <h1>{restaurantName}</h1>
            <p>Enter bill amount: </p>
            <input
                type="number"
                placeholder='Enter bill amount' value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <p>Enter total number of people: </p>
            <input
                type="number"
                placeholder='Enter total number of people' value={totalPeople}
                onChange={(e) => setTotalPeople(e.target.value)}
            />

            <p>Select Tip Percentage:</p>
            <div className='tip-options'>
                <TipOption tipPercentage={15} onSelect={setSelectedTip} />
                <TipOption tipPercentage={18} onSelect={setSelectedTip} />
                <TipOption tipPercentage={20} onSelect={setSelectedTip} />
                <TipOption tipPercentage={25} onSelect={setSelectedTip} />
            </div>

            <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
            <p>Total Amount: ${total.toFixed(2)}</p>
            <p>Amount per Person: ${perPerson.toFixed(2)}</p>

        </div>
    )
}

export default TipCalculator
