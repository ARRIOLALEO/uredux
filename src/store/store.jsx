import {configureStore} from '@reduxjs/toolkit'
import newsSlice from '../components/Home/homeSlice'

const store =  configureStore({
    reducer:{
        recipes:newsSlice.reducer
    }
})

export default store