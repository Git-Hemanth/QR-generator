let imgbox=document.getElementById("imgbox");
let qrImage=document.getElementById("qrimage");
let qrtext=document.getElementById("qrtext");
let downloadBtn = document.getElementById("downloadBtn");


function generateQR(){
    if(qrtext.value.length >0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    let dataUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
        qrImage.src = dataUrl;
    imgbox.classList.add("show-img");
    downloadBtn.download = "qrcode.png";
    downloadBtn.href = dataUrl;
    downloadBtn.style.display = "block";
    //downloadBtn.click();
    }else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000)
    }};
    
