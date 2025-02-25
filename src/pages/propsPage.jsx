import React from 'react'
import Hello from ',,/components/hello'

const PropsPage = () => {
  /* 파라미터를 만들어서 넘길 수 있음 = 함수니까*/
  const age = 3
  const name = '홍길동'
  return (
    <div>
    <Hello name = {name} ahe={age} color = 'red'></Hello>
    <Hello></Hello>
    </div>
  )
}