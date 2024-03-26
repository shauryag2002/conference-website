import React from 'react'

function Button({className, children, overlay, onClick, type, disabled, label}) {
  return (
	  <button
		  disabled={disabled}
		  type={type}
		  onClick={onClick}
		  aria-label={label}
			className={`${overlay ? '' : 'gradient-bg'} text-white h-[54px] rounded-md p-[8px] ${className}`}
      >{children}</button>
	);
}

export default Button