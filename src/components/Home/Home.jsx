import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {callToAPI} from './homeSlice'

function Home(){
    const dispatch = useDispatch()
    const data = useSelector((state)=> state)
    useEffect(()=>{
        dispatch(callToAPI())
    },[])
    console.log(data)
    return(
        <>
            <h1>this is my home</h1>
        </>
    )
}
export default Home
