import React from 'react'

const TipOption = ({ tipPercentage, onSelect, selectedTip}) => {
    return (
        <div>
            <button
                className={tipPercentage === selectedTip ? 'selected' : ''}
                onClick={() => onSelect(tipPercentage)}
            >
                {tipPercentage}%
            </button>
        </div>
    )
}

export default TipOption