import React from 'react'

const TipOption = ({tipPercentage, onSelect}) => {
  return (
    <div>
      <button onClick={() => onSelect(tipPercentage)}>
        {tipPercentage}%
      </button>
    </div>
  )
}

export default TipOption