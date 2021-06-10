
class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code3")
        this.access2.position(700,90);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,120);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code2")
        this.access3.position(100,350);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,380);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("Code4")
        this.access4.position(700,350);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(700,380);
        this.button4.style('background', 'lightgrey');

        this.button5 = createButton('ALOHAMORA');
        this.button5.position(500,430);
        this.button5.style('background', 'lightgrey')

        this.button6 = createButton('HIDE ALOHAMORA');
        this.button6.position(500,470);
        this.button6.style('background', 'lightgrey')
        
    }

    hide(){
        this.access1.hide()
        this.access2.hide()
        this.access3.hide()
        this.access4.hide()
        this.button1.hide()
        this.button2.hide()
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide();
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                sound.play();
                score++;
           }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                sound.play();
                score++;
            }
        });
        
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        sound.play();
        score++;
    }
});

this.button4.mousePressed(() => {
    if(system.authenticate(accessCode4,this.access4.value())){
        this.button4.hide();
        this.access4.hide();
        sound.play();
        score++;
    }
});

this.button5.mousePressed(() => {
   harry.addImage(answer)
   harry.scale = 0.6
});

this.button6.mousePressed(() => {
    harry.addImage(harryImage)
    harry.scale = 0.45
 });

 if(score === 4){
    this.button5.hide();
    this.button6.hide();
 }
 
    }
}
