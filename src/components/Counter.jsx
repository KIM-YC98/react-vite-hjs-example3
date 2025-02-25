import React, { useState } from 'react'

//1.화면 갱신이 안되고 있음
//state = 상태
//state 란 리엑트가 관리하는 화면갱신용 변수
//함수 호출과 이벤트 등록


const Counter = () => {
  //let number = 0
  const [number, setNumber] = useState(0)

  const onIncrease = () => {
    //number = number + 1
    setNumber(number + 1)
    console.log(number)
  }
  const onDecrease = () => {
    setNumber((number) => number - 1) 
    console.log(number)
  }
  //prettier-ignore
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease} >+1</button>
      <button onClick={onIncrease} >-1</button>
      <button >-1</button>
    </div>
  )
}