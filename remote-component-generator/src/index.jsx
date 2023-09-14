import React from 'react'

function Test({ x }) {
  return (
    <div>
      远程组件
      <p>
        参数x：{x}
      </p>
      <button
        onClick={() => {alert(1)}}
      >
        test
      </button>
    </div>
  )
}

export default Test
