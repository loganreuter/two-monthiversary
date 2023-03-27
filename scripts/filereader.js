const FOLDER = "../imgs/"

let images = []

export const get_images = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", FOLDER, true);
    xhr.responseType = "document";
    xhr.onload = () => {
        if(xhr.status == 200){
            for(let img of xhr.response.getElementsByTagName("a")){
                // console.log(img, img.title, img.title.match(/\.(jpe?g|png)$/i))
                if(img.title.match(/\.(jpe?g|png)$/i)){
                    images.push(img.href)
                }
            }
            resolve(images)
        } else {
            reject("Failed to get images")
        }
    }

    xhr.send()
})