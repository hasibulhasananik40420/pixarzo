import BlogCard from '@/components/BlogCard'
import CommonAction from '@/components/shared/CommonAction'
import React from 'react'

const BlogPage = () => {
  return (
    <section>
    <CommonAction title={'Blog'} subTitle={'Home | blog'}/>

     <div className='max-w-[1320px] mx-auto px-3 py-[96px]'>
        <BlogCard/>
     </div>
  </section>
  )
}

export default BlogPage