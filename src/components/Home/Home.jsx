import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {callAPI} from './homeSlice'

function Home(){
    const dispatch = useDispatch()
    const data = useSelector((state)=> state)
    useEffect(()=>{
        dispatch(callAPI())
    },[])
    console.log(data,"im here")
    return(
        <>
            <h1>this is my home</h1>
        </>
    )
}
export default Home
