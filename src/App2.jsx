import { BeowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/nootstrap.min.css'

// 1. 기본 라우팅 방법
// function App2() {
//    return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>
//           <Route path="/hello" element={<HelloPage />}></Route>
//           <Route path="/profile" element={<ProfilePage />}></Route>
//           <Route path="/board" element={<BoardPage />}></Route>

//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

function About(){

  const navigate = useNavigate()


  return (
    <div>
      <button onClick={() => {
        navigate('profile')
      }}
>
      어바웃 페이지로 이동하기
      </button>

      <button onClick={() => {
        navigate(-1)
      }}
>
     이전 페이지로 이동하기
      </button>

      <h2>여기는 About 페이지입니다.</h2>
      <p>대충 쇼핑몰 페이지라는 뜻</p>
    {/* 서브 페이지가 보열 위치를 Outlet으로 지정해준다. */}
      {/* <Outlet /> */}
      <Routes>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
      </div>
  )
}

function Location () {
  return (
    
      <h1>로케이션 컴포넌트.</h1>
   
  )
}


//2. 중첩 라우팅
// /about/location
// 서브 페이지의 path는 /를 생략하고 작성하면 된다
// Outlet 없이 서브 페이지 라우팅
function App2() {



  return (
   <>
     <BrowserRouter>
       <Routes>
        <Route path='/about/*' element={<About />} >
            <Route path="location" element={<Location />}></Route>
          </Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
       </Routes>
     </BrowserRouter>
   </>
 )
}



// 3.  useNavigate 사용

{/* <button
        onClick={() => {
          navigate('/profile')
        }}
      >
        어바웃 페이지로 이동하기
      </button>
function About() {
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => {
          navigate('/profile')
        }}
      >
        프로필 페이지로 이동하기
      </button>

      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        이전페이지 이동
      </button>

      <h2>여기는 About 페이지입니다.</h2>
      <p>대충 쇼핑몰 페이지라는 뜻</p>
      {/* 서브 페이지가 보여질 위치를 Outlet으로 지정해준다. /}
      {/ <Outlet /> */}
//       <Routes>
//         <Route path='/location' element={<Location />}></Route>
//       </Routes>
//     </div>
//   )
// } */}

//4. 파라미터 처리 하기
// url의 파라미터 값을 가져오기 위해 useParams()
// board/1 + get
//(✳✳ url :http://localhost:3000/board/21 인 경우)
// 👀 <Route path="board/:id" element={<BoardPage />} /> 👀
// const params = useParams();
// console.log(params);
// --console--
// {id : 21}





export default App2
