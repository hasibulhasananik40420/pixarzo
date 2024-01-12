import loading from '@/styles/loading.module.css'

const Loading = () => {
   
  return (
    <div className='h-[100vh] bg-PrimaryColor'>
    <div className={`${loading.loader}`}></div>
  </div>
  )
}

export default Loading