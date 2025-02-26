import React, {useState} from 'react'
import axios from 'axios'

//prettier-ignore
const AxiosGetPage = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((response)=> {
                //통신이 성공했을 때
                console.log(response)
                setData(response.data)
             })
             .catch(function (error){
                //에러가 났을 떄 실행 구문
                console.log(error)

             })
             .then(()=>{
                //try catch finally 에서 finally 부분에 해당
                console.log('에러가 나든 안나든 무조건 실행');
             })
    }


  return (
    <div className='text-center mt-5'>
        <h2>엑스오스 Get 연습</h2>
        <hr />
        {
        data && data.map((post,index)=>(
            <div key={index}>
                <h3>타이틀:{post.title}</h3>
                <h3>타이틀:{post.userId}, 아이디:{post.id}</h3>
                <h3>바디:{post.body}</h3>
                </div>
        ))
        }
    </div>
  )
}

export default AxiosGetPage