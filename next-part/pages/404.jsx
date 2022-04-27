import React,{useEffect} from 'react'
import {useRouter} from 'next/router';

import Button from '@material-ui/core/Button'

export default function Notfound() {


    const router=useRouter();


useEffect(() => {
   setTimeout(()=> {
    router.push('/')
   },3000)
 
}, [])


    return (
        <div>
            <h3>Page not found</h3>
            <p>Go to <a href='/'><Button>home page</Button></a></p>
        </div>
    )
}
