import React from 'react'

// 컴포넌트 = js + xml(heml) 문법 = JSX
// // jsx 문법은 html과 js를 조합한 문법

// 문법 1. 반드시 부모 태그가 있어야 한다.
// = virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다.

//2. 변수 사용시 {} 표현식 문법 사용
//3. 조건문(if) 사용 시 삼항연산자 사용
//4. class 대신 className
//5. react DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용한다.
const JSXPage = () => {
    const name = '리엑트'
    const color = 'red'
    const islogin = true
    const style={
        backgroundColor:'green'
        fontSize : "32px"
    }

    //return <> {islogin ? <div> 로그인 되었습니다.</div> : <div> 로그인이 필요합니다.</div>}
//   return (
  
//   <div>JSXPage</div>
//   <div style={{color:'red'}}>{name}</div>
  
return (

    <div className = "d-flex" style={style}>안녕하세요</div>
)
}

export default JSXPage