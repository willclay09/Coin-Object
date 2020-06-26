let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random(0,1))
    
    },
    toString: function() {
       if(this.state === 0) {
           document.body.append('heads ')
       } else {
        document.body.append('tails ')
       }
    },
    toHTML: function() {
        parentElement = document.querySelector('body')
        let image = document.createElement('img');
        
        if(this.state === 0) {
            image.src = './img/heads.jpg'
        } else {
            image.src = './img/tails.jpg'
        }
        parentElement.append(image)
        return image;
    }
};
function display20Flips(){
    for(let indexFlips = 0; indexFlips < 20; indexFlips += 1){
    coin.flip()
    coin.toString()
    }
}
function display20Images(){
    for(let indexImages = 0; indexImages < 20; indexImages += 1){
    coin.flip()
    coin.toHTML()
    }
}
display20Flips()
display20Images()


// fix flip function
// run display20Flips 20 times
// run display20Images 20 times