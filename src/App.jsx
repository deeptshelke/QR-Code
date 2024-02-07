import QRCode from 'qrcode';
import {useState} from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')


  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
      width: 800,
      margin: 1,
      color:{
        dark: '#000000ff',
        light: '#ffffffff'
      }
    },(err, url)=>{
      if(err) return console.error(err)
    setQrcode(url)
    })
  }

  return (
    <div className="App">
       <h1>QR CODE GENERATOR</h1>
       <input type="text" placeholder="e.g. https://google.com" value={url} onChange={(evt) => setUrl(evt.target.value)}/>
       <button onClick={GenerateQRCode}>Generate</button>
       {qrcode && <>
     
        
        <img src={qrcode}    />
        <a href={qrcode} download="qrcode.png">Download</a>
        </>}
       
    </div>
      
        
  )
}

export default App
