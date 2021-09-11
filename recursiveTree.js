let treeSketch = p =>{
    p.setup = function(){
        p.createCanvas(400, 400);
        p.angleMode(p.DEGREES);
        // p.noLoop();
        p.frameRate(10);
        leafColor = p.createColorPicker('#61A509');
    }

    p.draw = function(){
        // p.randomSeed(280);
        p.background(200);
        p.translate(p.width/2,p.height/2+175);
        branch(100);
    }

    function branch(length){
        // var angleL = p.map(p.mouseX,-400,400,0,30); //to Control spread of branches via mouse
        // var angleR = p.map(p.mouseX,-400,400,0,-60);
        p.push();
        if(length>10){
            p.strokeWeight(p.map(length,10,100,1,15))
            p.stroke("#381d10");
            p.line(0, 0, 0, -length);
            p.translate(0, -length);
            p.rotate(p.random(-20,-30));
            branch(length*p.random(0.7,0.78));
            p.rotate(p.random(50,60));
            branch(length*p.random(0.7,0.78));
        }
        else{
            p.fill(leafColor.color());
            p.noStroke();
            p.ellipse(10, 10, 10, 5);
            p.ellipse(10, 15, 10, 5);
        }
        p.pop();
    }
}

let draw3 = new p5(treeSketch, window.document.getElementById('drawing3'));