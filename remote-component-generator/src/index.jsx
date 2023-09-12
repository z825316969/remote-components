import React from 'react'

function Test({ x }) {
  return (
    <div>
      这是远程组件
      <p>
        这是参数x：{x}
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
