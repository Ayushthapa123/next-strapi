import React from 'react'
import { useRouter } from 'next/router'

export default function Index() {

  const router=useRouter();
  const postId=router.query.folders;
  console.log(postId);
  return (
    <div>Hello Post with the slug <h4> {postId}</h4></div>
  )
}
