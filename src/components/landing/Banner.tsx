
interface Props {
  className?: string,
  children?: React.ReactNode
}  

export default function Banner({ children,className = ''}: Props) {
  return (
    <div className={`p-18 bg-blue-primary text-white uppercase  text-3xl ${className} overflow-hidden relative`}>
      <div className="circle size-40 rounded-full border border-white absolute top-0 left-0 -translate-x-1/6 -translate-y-3/5"></div>
      <div className="circle size-40 rounded-full border border-white absolute top-0 left-0 -translate-x-4/6 translate-y-1/12"></div>
        {children}
    </div>
  )
}
