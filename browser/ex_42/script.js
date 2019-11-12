window.onload=function(){
var images=["batman.png","batmanwb.png","flash.png","flashwb.png","superman.png","supermanwb.png","wonder_woman.png","wonder_womanwb.png"]
images.forEach(myFunction);

function myFunction(item, index) {
    var body=document.querySelector('body')
    var img=document.createElement('img')
    img.src=item
    img.alt=item.split(".")[0]
    body.appendChild(img)
}
}
