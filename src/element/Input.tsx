import React from 'react';
import gsap from 'gsap';
import '../style/elements/input.scss'

interface InputProps {
  width?: number
  height?: number
  placeholder?: string
}

const Input = ({width, height, placeholder}:InputProps) => {
  const [isShow, setShow] = React.useState(false)
  const handleClick = (e:any) => {
    setShow(!isShow)
    gsap.fromTo(e.nativeEvent.srcElement.nextElementSibling, .6,{
      width: `100%`
    }, {
      width: 0
    })
  }

  return (
    <div className='inputBox' style={{width: width ? `${width}px` : `${100}%`,
      height: height ? `${height}px` : `${100}%`}} onClick={(e) => handleClick(e)}>
      <input className='inputBox__input' placeholder={placeholder} style={{width: width ? `${width}px` : `${100}%`,
        height: height ? `${height}px` : `${100}%`}} type="text" />
      <div className='inputBox__effects' />
    </div>
  )
};

export default Input;