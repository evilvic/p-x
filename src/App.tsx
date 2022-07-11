import { useEffect, useRef } from 'react'

import Blockly, { Toolbox } from 'blockly'

const App = () => {

  const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "math_number"
      },
      {
        "kind": "block",
        "type": "math_arithmetic"
      },
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "text_print"
      },
    ]
  }

  useEffect(() => {
    const workspace  = Blockly.inject('blocklyDiv', { toolbox });
  }, [])

  return (
    <>
    <div 
      id='blocklyDiv'
      className='w-[480px] h-[600px]'
    />
      <canvas className='rounded-md bg-slate-50 w-[500px] h-[500px]'/>
    </>
  )

}

export default App
