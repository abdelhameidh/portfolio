import React from 'react'

const MagicButton = ({
    title, position, icon, handleClick,otherClasses 
}:{
title: string; position: string; icon: React.ReactNode,
handleClick?:() => void; otherClasses?: string }) => {
  return (
        <button className="inline-flex w-full h-12 animate-shimmer items-center 
        justify-center rounded-lg border border-slate-800
         bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
         px-6 font-medium text-slate-400 transition-colors focus:outline-none md:w-60 md:mt-10" 
         onClick={handleClick}>
          <span className = {`flex items-center  cursor-pointer justify-center
             text-sm font-medium text-white
              hover:bg-slate-800
               hover:text-purple
                backdrop-blur-3xl gap-2 ${otherClasses} `}>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>          
  )
}

export default MagicButton