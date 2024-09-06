'use client'

import React from 'react'
export default function Home() {
  const [checked, setChecked] = React.useState(false)

  return (
    <main className="p-8">
      <b>Switch: </b>
      <Switch
        checked={checked}
        onChange={setChecked}
        backgroundImageChecked="#9747FF"
        backgroundImageUnchecked="inherit"
      />
    </main>
  )
}

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  backgroundImageChecked?: string
  backgroundImageUnchecked?: string
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  backgroundImageChecked,
  backgroundImageUnchecked,
}) => {
  const switchStyle = {
    width: '40px',
    height: '20px',
    borderRadius: '10px',
    border: '2px solid #black',
    backgroundColor: checked
      ? backgroundImageChecked
      : backgroundImageUnchecked,
    cursor: 'pointer',
    transition: 'background 0.3s',
  }

  const handleStyle = {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: 'black',
    position: 'relative' as 'relative',
    top: '0px',
    left: checked ? '20px' : '2px',
    transition: 'left 0.3s',
  }

  return (
    <button onClick={() => onChange(!checked)} style={switchStyle}>
      <div style={handleStyle}></div>
    </button>
  )
}
