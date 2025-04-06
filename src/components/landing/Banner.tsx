import { Link } from "react-router-dom"
import { Button } from "../ui/button"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  url?: string,
  variant?: 'default' | 'transparent'
  withFigures?: boolean,
  text: string,
  textButton: string,
  href: string,
}

export default function Banner({ className = '', url, variant = 'default', withFigures = true,text,textButton,href }: Props) {

  let backgroundImage = ``
  let currentURL = url ? `url(${url})` : ''

  if (variant === 'default') {
    backgroundImage = ` linear-gradient( #243982E6,#243982E6) , ${currentURL}`
  }
  if (variant === 'transparent') {
    backgroundImage = ` linear-gradient( rgba(0, 0, 0, 0.27), rgba(0, 0, 0, 0.27)) , ${currentURL}`
  }

  return (
    <div className={`p-18 bg-blue-primary flex items-center justify-between text-white uppercase  text-3xl overflow-hidden relative  bg-no-repeat bg-center bg-cover ${className} `} style={{ background: backgroundImage }}>
      {
        withFigures && (
          <>
            <div className="circle size-40 rounded-full border border-white absolute top-0 left-0 -translate-x-1/6 -translate-y-3/5"></div>
            <div className="circle size-40 rounded-full border border-white absolute top-0 left-0 -translate-x-4/6 translate-y-1/12"></div>
          </>
        )
      }
      <p className="max-w-xl">{text}</p>
      <Button asChild={true} variant={'outline'} className="bg-transparent" size={'lg'}>
        <Link to={href}>
          {textButton}
        </Link>
      </Button>
    </div>
  )
}
