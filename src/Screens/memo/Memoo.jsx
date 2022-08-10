import React, { useMemo, useRef, useState } from 'react'

import "./Memo.scss"




const Memoo = () => {

    const top = useRef(null)
    const bottom = useRef(null)


    const homescroll = () => top.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const aboutscroll = () => bottom.current.scrollIntoView({ behavior: 'smooth', block: 'start' })



    return (

        <>
            <div className="memo__container">
                <div>
                <button ref={bottom} onClick={homescroll} className="top">Click here to scrool to Bottom</button>
                </div>
                <div>
                <button ref={top} onClick={aboutscroll} className="top">Click here to scrool to Top</button>
                </div>
            </div>
        </>





    )
}

export default Memoo



