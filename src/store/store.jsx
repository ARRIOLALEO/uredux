import {configureStore} from '@reduxjs/toolkit'
import recipiesSlice from '../components/Home/homeSlice'

const store =  configureStore({
    reducer:{
        recipes:recipiesSlice.reducer
    }
})

export default store