import Home from '../pages/Home'
import Error from '../pages/Error'

export default[
    {
        path:"/",
        exact: true,
        page: Home
    },
    {
        path: "*",
        page: Error
    }
]
