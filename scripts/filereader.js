// const FOLDER = "./imgs/"
const FOLDER = "https://api.github.com/repos/lreuter2020/two-monthiversary/contents/imgs"

let images = []

export const get_images = new Promise((resolve, reject) => {
    fetch(FOLDER)
        .then((res) => res.json())
        .then((data) => {
            for(let img of data){
                if(img.name.match(/\.(jpe?g|png)$/i)){
                    images.push(img.html_url)
                }
            }
            resolve(images)
        }).catch((err) => {
            reject(err.message)
        })
    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", FOLDER, true);
    // xhr.responseType = "document";
    // xhr.onload = () => {
    //     if(xhr.status == 200){
    //         for(let img of xhr.response){
    //             // console.log(img, img.title, img.title.match(/\.(jpe?g|png)$/i))
    //             if(img.title.match(/\.(jpe?g|png)$/i)){
    //                 // images.push(img.href)
    //                 images.push(img.href)
    //             }
    //         }
    //         resolve(images)
    //     } else {
    //         reject("Failed to get images")
    //     }
    // }

    // xhr.send()
})