console.log("Script running...")
document.querySelector('.cross').style.display = 'none';/*so that when the page loads cross is not visible*/
/* toggle sidebar*/
document.querySelector('.images').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'
        }, 300);
    }
})