let MovingPearl = document.querySelector('.movingpearl')
let MovingPearlwisth = MovingPearl.computedStyleMap().get('width').value
let MovingPearlheight = MovingPearl.computedStyleMap().get('height').value
let MovingPearlleft = MovingPearl.computedStyleMap().get('left').value
let MovingPearltop = MovingPearl.computedStyleMap().get('top').value

let MovingCloud = document.querySelector('.movingcloud')
let MovingCloudleft = MovingCloud.computedStyleMap().get('left').value

let PearlMoving = document.querySelector('.pearlmoving>figure>picture')
let PearlMovingimg = document.querySelector('.pearlmoving>figure>picture>img')
let PearlMovingleft = PearlMoving.computedStyleMap().get('left').value
let PearlMovingtop = PearlMoving.computedStyleMap().get('top').value


let CloudCrown1 = document.querySelector('.cloud1')
let CloudCrown2 = document.querySelector('.cloud2')

let stone1 = document.querySelector('.stone1')
let stone2 = document.querySelector('.stone2')
let stone3 = document.querySelector('.stone3')
let stone4 = document.querySelector('.stone4')
let stone5 = document.querySelector('.stone5')
let stone6 = document.querySelector('.stone6')
let stone7 = document.querySelector('.stone7')
let stone8 = document.querySelector('.stone8')
let stone9 = document.querySelector('.stone9')
let stone10 = document.querySelector('.stone10')
let stone11 = document.querySelector('.stone11')
let stone12 = document.querySelector('.stone12')

let bubble1 = document.querySelector('.bubble1')
let bubble1top = bubble1.computedStyleMap().get('top').value
let bubble2 = document.querySelector('.bubble2')
let bubble2top = bubble2.computedStyleMap().get('top').value
let bubble3 = document.querySelector('.bubble3')
let bubble3top = bubble3.computedStyleMap().get('top').value




window.addEventListener('scroll', ()=> {
    let Sctop = window.scrollY;
    console.log(Sctop)
    if (Sctop == 0) {
        MovingPearl.style.top =  '46%'
    }
    else if (Sctop > 1 && Sctop < 540 ) {
        MovingPearl.style.width =  MovingPearlwisth - Sctop / 4.89 + 'px'
        MovingPearl.style.height =  MovingPearlheight - Sctop / 4.89 + 'px'
        MovingPearl.style.left =  MovingPearlleft + Sctop / 17.1 + '%'
        MovingPearl.style.top =  '46%'
        // MovingCloud.style.left = "-100%"
        if (Sctop > 220) {
            MovingPearl.style.top =  17 + Sctop / 7 + '%'
        }
    }
    else if (Sctop > 540 && Sctop < 880) {
        MovingCloud.style.left = MovingCloudleft + Sctop / 12.57 + '%'
        PearlMoving.style.left = "35%"
    }
    else if (Sctop > 940 && Sctop < 1330) {
        PearlMoving.style.left =  -26 +  Sctop / 15.66 + '%'
        PearlMoving.style.top =  10.5 +  Sctop / 33 + '%'
        PearlMoving.style.opacity = "1"
        if (Sctop >1240 ) {
            PearlMoving.style.opacity = 1 -  Sctop/1340 
        }
        PearlMovingimg.style.width = "35px"
        PearlMovingimg.style.height = "35px"
    }
    else if (Sctop > 1719 && Sctop < 2330) {
        PearlMoving.style.left = "24%" 
        PearlMovingimg.style.width = "20px"
        PearlMovingimg.style.height = "20px"
        PearlMoving.style.top = 198 + Sctop / 66.5 + "%"
        PearlMovingimg.style.width = 5 + Sctop / 95.33 + "px"
        PearlMovingimg.style.height = 5 + Sctop / 95.33 + "px"
        PearlMoving.style.opacity = 1
        if (Sctop > 2200) {
            PearlMoving.style.opacity = .9 -  Sctop/3730
        }
    }
    else if (Sctop >2500 && Sctop < 2830) {
        CloudCrown1.style.left = -261 + Sctop/11.6 + "%"
        CloudCrown2.style.left = 442 - Sctop/7.6 + "%"
        stone1.style.top = -400 + Sctop/6.05 + "vh"
        stone1.style.left = -10 + Sctop/48.7 + "%"
        stone2.style.top = -300 + Sctop/7.644 + "vh"
        stone2.style.left = 80 - Sctop/82.43 + "%"
        stone3.style.top = -370 + Sctop/6.353 + "vh"
        stone3.style.left = -10 + Sctop/52.7 + "%"
        stone4.style.top = -420 + Sctop/5.74 + "vh"
        stone4.style.left = 100 - Sctop/50.76 + "%"
        stone5.style.top = -320 + Sctop/7.299 + "vh"
        stone5.style.left = 0 + Sctop/56.15 + "%"
        stone6.style.top = -340 + Sctop/6.927 + "vh"
        stone6.style.left = 120 - Sctop/41.9 + "%"
        stone7.style.top = -410 + Sctop/5.88 + "vh"
        stone7.style.top = -100 + Sctop/18.36 + "%"
        stone8.style.top = -380 + Sctop/6.19 + "vh"
        stone8.style.left = 140 - Sctop/32.5 + "%"
        stone9.style.top = -400 + Sctop/5.89 + "vh"
        stone9.style.left = -100 + Sctop/19.31 + "%"
        stone10.style.top = -390 + Sctop/6.06 + "vh"
        stone10.style.left = 160 - Sctop/25.56 + "%"
        stone11.style.top = -420 + Sctop/5.70 + "vh"
        stone11.style.left = -120 + Sctop/16.59 + "%"
        stone12.style.top = -300 + Sctop/7.48 + "vh"
    }
    else if (Sctop>700 && Sctop<2000) {
        bubble1.style.top =  5100 - Sctop*2 + "px"
        bubble2.style.top =  3500 - Sctop + "px"
        console.log(bubble1top)
    }
})