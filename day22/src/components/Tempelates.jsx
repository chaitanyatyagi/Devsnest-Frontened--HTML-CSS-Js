import React from 'react'

function Tempelates({tempelates,setMeme}) {
    return (
        <div className='tempelates'>
            {tempelates.map(tempelate => (
                <div key={tempelate.id} className='tempelate'>
                    <div className='image' style={{ backgroundImage: `url(${tempelate.url})` }} onClick = {() => {
                        setMeme(tempelate)
                    }}></div>
                </div>
            ))}
        </div>
    )
}

export default Tempelates
