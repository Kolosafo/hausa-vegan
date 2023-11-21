import Image from 'next/image'
import React, { FC } from 'react'


type prop= {
post: IPost
}
const SinglePostCard:FC<prop> = ({post}) => {
  return (
    <div
    key={post.id}
    className="rounded-lg max-w-[20rem] w-[30%] p-5 shadow-md bg-PaleBlue"
  >
    <h1 className="text-xl font-bold">
      {post.title.length > 25
        ? `${post.title.slice(0, 25)}....`
        : post.title}
    </h1>
    <Image
      width={100}
      height={100}
      src={post.coverImg}
      alt="cover_image"
      className="w-[40%] my-1"
    />
    <span className="block text-sm mb-1">
      {post.excerpt.length > 40
        ? `${post.excerpt.slice(0, 40)}....`
        : post.excerpt}
    </span>
    <div className="flex justify-between w-full">
      <a
        href={`blog/detail/?id=${post.id}&slug=${post.slug}`}
        className="text-sm orangeTextBlackHover"
      >
        Read More
      </a>
      <a
        href={`blog/edit/?id=${post.id}`}
        className="text-sm blackTextOrangeHover"
      >
        Edit
      </a>
    </div>
  </div>
  )
}

export default SinglePostCard