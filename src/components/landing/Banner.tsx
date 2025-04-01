
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode,
  url?:string,
  variant?: 'default' | 'transparent'
}  

export default function Banner({ children,className = '', url, variant = 'default' }: Props) {

  let backgroundImage = ``
  let currentURL = url ? `url(${url})` : ''

  if(variant === 'default') {
    backgroundImage = ` linear-gradient( #243982E6,#243982E6) , ${currentURL}`
  }
  if(variant === 'transparent') {
    backgroundImage = ` linear-gradient( rgba(0, 0, 0, 0.27), rgba(0, 0, 0, 0.27)) , ${currentURL}`
  }

  return (
    <div className={`p-18 bg-blue-primary text-white uppercase  text-3xl overflow-hidden relative  bg-no-repeat bg-center bg-cover ${className} `} style={{background:backgroundImage}}> 
      <div className="circle size-40 rounded-full border border-white absolute top-0 left-0 -translate-x-1/6 -translate-y-3/5"></div>
      <div className="circle size-40 rounded-full border border-white absolute top-0 left-0 -translate-x-4/6 translate-y-1/12"></div>
        {children}
    </div>
  )
}
