console.log("content-script.js connected");
let xcoord = 0;
let ycoord = 0;
addEventListener("mousemove", (event) => {
        xcoord = event.pageX;
        ycoord = event.pageY;
})


const droppings = ['https://icons.iconarchive.com/icons/sailorsaturn78/halloween/32/blood-splat-icon.png',
                    'https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/24/32410-fish-cake-with-swirl-icon.png',
                    'https://icons.iconarchive.com/icons/sonya/swarm/32/Poop-icon.png',
                    'https://icons.iconarchive.com/icons/fixicon/market/48/eclair-icon.png',
                    'https://icons.iconarchive.com/icons/artbees/chocolate-obsession/32/Chocolate-Cream-Roll-icon.png',
                    'https://icons.iconarchive.com/icons/robinweatherall/chocolate/24/chocolate-drop-icon.png',
                    'https://icons.iconarchive.com/icons/fixicon/market/128/eclair-icon.png',
                    'https://icons.iconarchive.com/icons/google/noto-emoji-activities/48/52705-sparkles-icon.png',
                    'https://icons.iconarchive.com/icons/google/noto-emoji-activities/72/52705-sparkles-icon.png']
const soundfx = ['https://orangefreesounds.com/wp-content/uploads/2022/07/Boop-sound-effect.mp3?_=1',
                'https://www.orangefreesounds.com/wp-content/uploads/2016/12/Sparkle-sound-effect.mp3?_=1',

]
let j = 0;
let i = 0;
setInterval(()=> {
    const newPoop = new Image();
    newPoop.src = droppings[j];0
    newPoop.setAttribute("id", `${i}`);
    console.log(newPoop);
    document.body.prepend(newPoop);
    const currentPoopElement = document.getElementById(`${i++}`);
    console.log(currentPoopElement);
    currentPoopElement.style.position = 'absolute';
    currentPoopElement.style.left = `${xcoord}px`;
    currentPoopElement.style.top = `${ycoord}px`;
    const sparkle = new Audio(soundfx[0]);
    console.log(sparkle);
    sparkle.play()
        // .then(()=> {})
        // .catch(error => console.log(error));
if(j !== droppings.length - 1){
    j++
}else{
    j = 0;
}
}, (Math.floor(Math.random() * 2000)));


// (Math.floor(Math.random() * 10000))
//create class poop
//or create an on load command?
    //create function dropping for poop to drop
        //randomized set interval here?
//will popos dissapear or stay on screen?