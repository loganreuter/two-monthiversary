import { get_images } from "/filereader.js"
import { RNG } from "/rng.js"
import { animator } from "/animate.js"

const WIDTH = document.body.offsetWidth;
const HEIGHT = document.body.offsetHeight;
const SCALER = 0.15;
const rng = new RNG(1272023)

// console.log(WIDTH, HEIGHT)

window.onload = () => {
    get_images.then((images) => {
        animator((i) => {
            DrawImage(images[i], i == images.length - 1)
        }, images.length, 500, images).then(() => {
            let canvas = document.getElementById("content");
            canvas.width = 900
            canvas.height = 900
            let ctx = canvas.getContext("2d");
            ctx.translate(canvas.width * 0.5, canvas.height * 0.5)
            ctx.fillStyle = "red"
            // console.log("canvas")
            animator((i) => {
                let [x,y] = DrawHeart(i)
                ctx.fillRect(15*x, -15*y, 4, 4)
            }, 1250).then(() => {
                let div = document.createElement("div");
                div.classList.add('note')
                div.innerText = "Thank you for an amazing two months!\nHere is to many more!"
                document.body.appendChild(div)
            })
        })
    }).catch((err) => {
        console.log(err)
    })
}

function DrawImage(href, cond){
    let image = new Image()
    image.src = href
    image.onload = () => {
        image.classList.add("img")

        let aspect_ratio = image.width / image.height
        let width = (WIDTH > HEIGHT) ? WIDTH * SCALER : HEIGHT * SCALER * aspect_ratio
        let height = (WIDTH < HEIGHT) ? HEIGHT * SCALER: width / aspect_ratio
        image.style.width = `${width}px`;
        image.style.height = `${height}px`
    
        let x = Math.floor(rng.random() * (WIDTH -  width))
        let y = Math.floor(rng.random() * (HEIGHT - height))
        
        image.style.top = `${y}px`;
        image.style.left = `${x}px`;
        // console.log(image.width, image.height, width, height, aspect_ratio, x, y)

        if(cond){
            image.style.left = '0px';
            image.style.top = '0px';
            image.style.right = '0px';
            image.style.bottom = '0px';
        }
        
        document.body.appendChild(image)
    }
}

function DrawHeart(i){
    let x = 16 * Math.pow(Math.sin(i), 3)
    let y = 13 * Math.cos(i) - 5 * Math.cos(2*i) - 2 * Math.cos(3*i) - Math.cos(4*i)
    return [x, y] 
}