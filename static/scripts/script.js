import { Elemxx } from "./elemxx.js";
const socials = {
    github: "https://github.com/vintheweirdass",
    bluesky: "https://vintheweirdass.bsky.social",
    instagram: "https://instagram.com/vintheweirdass",
    discord: "https://discord.com/users/999863217557880842",
    mail: "mailto:hi@vtwa.is-a.dev"
}
const uaMobile = (ua)=>{
      return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4))
}
const isMobile = () => {
    return !matchMedia("(hover: hover) and (pointer: fine)") && uaMobile(navigator.userAgent)
}
const style = document.createElement("style")
style.innerHTML = `body {
    font-family: monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkgray;
    gap:30px;
}
* {cursor: none;}    
`
document.body.appendChild(style)

customElements.define("v-root", class extends Elemxx {
    static css = `
        :me {
           display:flex;
           flex-direction:column;
           align-items:center;
           justify-content:center;
        }
    `
})

customElements.define("v-badge", class extends Elemxx {
    static css = `
        :me > div > p {
            position: absolute;
            transform-origin: 30% -100%;
            transform: rotate(90deg) translate(45%, 90%);
            font-size: 70px;
            background: linear-gradient(200deg,#ff6600,#8a0c0c,#ffb600);
            background-size: 180% 180%;
            background-clip: text;
            color: transparent;
            animation: gradient-animation 5s ease infinite;
        }
        
        @keyframes gradient-animation {
            0% {
                background-position: 0% 50%;
            }
        
            50% {
                background-position: 100% 50%;
            }
        
            100% {
                background-position: 0% 50%;
            }
        }
    `
    constructor() { super() }
    onMount() {
        const div = document.createElement("div")
        const span = document.createElement("p")
        span.innerText = "vin(cent)"
        div.appendChild(span)
        this.appendChild(div)
    }
})

customElements.define("v-list", class extends Elemxx {
    static css = `
        :me {
           display:flex;
           flex-direction:column;
           align-items:center;
           justify-content:center;
        }
    `
})

customElements.define("v-social", class extends Elemxx {
    static attrList = ["name"]
    static css = `
        :me {
           display:flex;
           flex-direction:column;
           font-size:80px;
        }
        :me > a {
           color:black;
           text-decoration:none;
           transition: all 0.3s ease-in-out
        }
        :me > a:hover {
           color:#8a0c0c;
        }
    `
    onMount() {
        const a = document.createElement("a")
        a.href = socials[this.attrs.name.value]
        const i = document.createElement("i")
        i.classList.add(`ri-${this.attrs.name.value}-line`)
        a.appendChild(i)
        this.appendChild(a)
    }
})

customElements.define("v-cursor", class extends Elemxx {
    static css = `
        :me {
            position: fixed;
            width: 20px;
            height: 20px;
            background-color: #ff6600;
            border-radius: 50% 50% 0 50%;
            pointer-events: none;
            transition: transform 0.1s ease;
            z-index: 9999;
        }
    `
    constructor() {
        super()
        this.style.display = "none"
        document.addEventListener('DOMContentLoaded', () => {
            if (isMobile()) return;
            this.style.display = "inherit"
            const cursor = this
            let lastX = 0;
            let lastY = 0;
            let rotation = 0;
            function updateCursor(e) {
                const deltaX = e.clientX - lastX;
                const deltaY = e.clientY - lastY;
                
                // Hitung rotasi berdasarkan arah gerakan
                const targetRotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
                // Buat transisi lebih smooth
                rotation += (targetRotation - rotation) * 0.2;
        
                // Ambil ukuran elemen cursor
                const offsetX = (cursor.offsetWidth / 2)-20;
                const offsetY = (cursor.offsetHeight / 2)-30;
        
                // Terapkan transformasi
                cursor.style.left = `${e.clientX + offsetX}px`;
                cursor.style.top = `${e.clientY + offsetY}px`;
                cursor.style.transform = `rotate(${rotation}deg)`;
                
                lastX = e.clientX;
                lastY = e.clientY;
            }
            document.body.addEventListener("dragstart", () => {
                this.style.display = "none"
                document.removeEventListener("mousemove", updateCursor)
            })
            document.body.addEventListener("dragend", () => {
                this.style.display = "inherit"
                document.addEventListener("mousemove", updateCursor)
            })
            document.addEventListener('mousemove', updateCursor);
        });
    }
})
