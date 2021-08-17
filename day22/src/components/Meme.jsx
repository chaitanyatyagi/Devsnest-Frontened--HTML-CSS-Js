import React,{useState} from 'react'

function Meme({meme,setMeme}) {

    const [form,setForm] = useState({
        template_id:meme.id,
        username:"chetantyagi",
        password:"airforce12IAS",
        boxes:[]
    })

    const generateMeme = () => {
        let url= `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        // form.boxes.map((box,index) => {
        //     url += `&boxes[${index}][text]=${box.text}`
        // })
        // console.log(url)
        form.boxes.map((box,index)=>{
            url += `&boxes[${index}][text]=${box.text}`;
        })
        fetch(url).then(res => res.json())
        .then((data) => {
            setMeme({...meme,url:data.data.url})
        })
    }

    return (
        <div className='meme'>
            <img src={meme.url}/>
            <div>
                {[...Array(meme.box_count)].map((_,index)=> (
                    <input key={index} type="text" placeholder = {`Meme Caption ${index+1}`} onChange={(event) => {
                        const newBoxes = form.boxes;
                        newBoxes[index] = {text:event.target.value}
                        setForm({...form,boxes:newBoxes})
                    }}/>
                ))}
            </div>
            <div>
                <button onClick={generateMeme}>Generate Meme</button>
                <button onClick={()=>setMeme(null)}>Choose Tempelates</button>
            </div>
        </div>
    )
}

export default Meme
