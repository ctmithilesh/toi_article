document.addEventListener("DOMContentLoaded", function () {
    alert("Page is loaded")
    const articleHeader = document.getElementById("article-header")
    articleHeader.innerHTML = `<span>IBM CEO Arvind Krishna on which jobs AI will impact first</span>
    `

    const articlePara = document.getElementById("article_para")
    const imgElement = document.createElement("img")
    imgElement.src = 'https://static.toiimg.com/thumb/resizemode-4,msid-102953746,imgsize-18658,width-720/102953746.jpg'
    imgElement.width = '250'
    imgElement.height = '250'
    articlePara.append(imgElement)

})