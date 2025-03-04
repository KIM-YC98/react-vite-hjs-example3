import React from 'react'

const ContextNotUsepage = () => {
  return (
    <>
    <GrandParent value='안녕하세요'></GrandParent>
    </>
  )
}


function GrandParent({ value }) {
  return <Parent value={value} />;
}

function Parent({ value }) {
  return <Child value={value} />;
}

function Child({ value }) {
  return <div>Received: {value}</div>;
}

export default ContextNotUsepage