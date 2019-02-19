// variable declarations
var xSpeed; //speed of moving lamps
var lampWidth; //width of lamps
var lampHeight; //height of lamps
var lampArray = []; //array for lamps
var xPos = []; //position of lamps
var numLamp = 7; //number of iterating lamps
var bus; //bus gif
var carArray = []; //array of cars
var fontNew; //monospace font
var rectTextX = 0; //x position of rectangles
var textArray; //y position of text
var textRextX; //x position of text
var end = false; //flip for end of game
var yPos = [0,0,0,0,0,0,0,0,0,0,0,0,0]; //ypositon of pictures
var fireworks = []; //array for fireworks
var gravity; //gravity variable for fireworks
var images = [[3],[8],[4],[5],[4],[10],[11],[10],[14],[10],[9],[10],[8]]; //image array
var changer1 = [0,0,0,0,0,0,0,0,0,0,0,0,0]; //array to change next/immediate picture
var changer2 = [1,1,1,1,1,1,1,1,1,1,1,1,1]; //array to change next/immediate picture
var yPos1 = [560,560,560,560,560,560,560,560,560,560,560,560,560]; //yposition of next/immediate picture
var begin = false; //flip for start game
var start_button; //start button image
var start_sprite; //start button sprite
var restart_button; //restart button image
var restart_sprite; //start button sprite

//asynchronous loading of assets
function preload(){
  //load lamps pictures
  for(var i = 0; i < numLamp; i++)
  {
    lampArray[i] = loadImage("lamp.png");
  }

  //load bus gif
  bus = loadGif("bus2.gif");

  //load car gifs
  for(var j = 0; j < 7; j++)
  {
    carArray[j] = loadGif("car"+ j +".gif");
  }
  //load monospace fonts
  fontNew = loadFont("NovaMono.ttf");

  //load images of experience
  for(var k = 0; k < 3; k++)
  {
    images[0][k] = loadImage("paragraph"+0+"/"+k+".jpg");
  }
  for(var l = 0; l < 8; l++)
  {
    images[1][l] = loadImage("paragraph"+1+"/"+l+".jpg");
  }
  for(var y = 0; y < 4; y++)
  {
    images[2][y] = loadImage("paragraph"+2+"/"+y+".jpg");
  }
  for(var q = 0; q < 5; q++)
  {
    images[3][q] = loadImage("paragraph"+3+"/"+q+".jpg");
  }
  for(var c = 0; c < 4; c++)
  {
    images[4][c] = loadImage("paragraph"+4+"/"+c+".jpg");
  }
  for(var w = 0; w < 10; w++)
  {
    images[5][w] = loadImage("paragraph"+5+"/"+w+".jpg");
  }
  for(var e = 0; e < 11; e++)
  {
    images[6][e] = loadImage("paragraph"+6+"/"+e+".jpg");
  }
  for(var a = 0; a < 10; a++)
  {
    images[7][a] = loadImage("paragraph"+7+"/"+a+".jpg");
  }
  for(var p = 0; p < 14; p++)
  {
    images[8][p] = loadImage("paragraph"+8+"/"+p+".jpg");
  }
  for(var v = 0; v < 10; v++)
  {
    images[9][v] = loadImage("paragraph"+9+"/"+v+".jpg");
  }
  for(var r = 0; r < 9; r++)
  {
    images[10][r] = loadImage("paragraph"+10+"/"+r+".jpg");
  }
  for(var b = 0; b < 10; b++)
  {
    images[11][b] = loadImage("paragraph"+11+"/"+b+".jpg");
  }
  for(var g = 0; g < 8; g++)
  {
    images[12][g] = loadImage("paragraph"+12+"/"+g+".jpg");
  }

  //load start button
  start_button = loadImage("start.png");
  //load restart button
  restart_button = loadImage("restart.png");
}

function beginGame()
{
 numLamp = 7; //seven lamps
 rectTextX = 0; //start rectangles at zero
 //story data 2D array
 textArray = ["Finding burger king, the restaurant that served food close to typical in a land beset with multifarious dishes that were at best strange to me was the best thing that happened to me in my first few days in Shanghai. ","Eating burgers all day is not as fun as it may sound even if it is from two of the most famous yet highly competitive fast food companies: Burger King and McDonalds. Drinking Pepsi cola by straw or directly from the cup, eating spicy or regular French fries, ploughing through a chicken, beef or pork burger that was either: fried, gilled or spiced with all the vegetables, ketchup and mayonnaise was as best exasperating after a week. ","This was my experience after having my spicy grilled burger from McDonalds that chilly afternoon in a school bus bound to a class trip in the city after three hours of class. Hunting for familiar dishes in a land that is, to me, as exotic as the word gets was expected, but dangerous because it almost permitted me to miss opportunities for discovery of cuisines that were at best strange. ","I wondered if I would love to live in Shanghai if I had a full scholarship for graduate school or a fantastic job opportunity that was in line with my long-term aspirations as the bus steadily went through the traffic on the underpass. Uhmmm, maybe not, I said to myself. I could deal with the cold during winter by layering and buying a better jacket and more sweaters, but what was I going to eat all year long? ","The unescapable advertisement boards of Burger King that lined the subway tunnels suddenly commenced popping up in my head in an animated fashion. Burgers, fries, sandwiches, and even more burgers I thought to myself. Nonetheless, with dissatisfaction and displeasure, I folded the used tissues and burger wrappers and pushed them into the cardboard package of the salty French fry as the bus creeped through more traffic.","I had tried Chinese food during lunch on the all-expense paid tours of the city organized by the university. The first Chinese restaurant I visited was a vegetarian restaurant that, humorous to me, used nonmeat recipes to make vegetarian food that looked like and tasted like meat. At first, I thought it was going to be a nightmare eating the spiced entity before me that I overhead tasted like duck. With great hesitation, I took the wooden chopsticks and carefully placed it into my mouth. Failing to recall the taste of duck meat after last eating it when I was 8 and lived on the farm of my grandmother, I swallowed it and breathed as a sign of victory. I then continued eating the hot vegetable dumplings with care and satiated myself with water. ","That was not too bad I thought to myself as I progressed down memory lane to the second time I found myself in a Chinese restaurant. It was a cold evening on the second day I arrived. I had not discovered Burger King nor McDonalds then, so I decided to explore the city by foot till I found a pacifier to my escalating hunger. I walked aimlessly till I found a group of students who were about to enter a Chinese restaurant that I had overlooked. They invited me to join them and after a good time was spent trying to get the waiter to understand we only wanted to eat something with rice and chicken, we were served several dishes and we had our fill with slight gustational discomfort. ","Better than the vegetarian restaurant I thought to myself as the bus swerved more traffic that the busy afternoon. Aha! I said to myself as I recalled my last memory of eating Chinese food before I went on a fast food spree. It was during a trip to a city called Suzhou and after a long day of walking through museums and taking good pictures, my friend wanted to eat something hot since it was freezing that night. ","After being disappointed by a restaurant that had mockups of hot dogs and tea but no available food, we found ourselves served with hot meat dumplings and locally made tea after a kind English-speaking local helped us communicate with the waiter. That was when it happened. We wanted dumplings with soup because we wanted something hot. The tea just happened to look like soup and the cup like a mini bowl. So, I put one dumpling into the tea and just when I was about to consume it, the waiter tapped me and said tea! Embarrassed, I asked her to take the, cup of dumpling and tea and hurriedly ate to catch the bus back to campus. ","Maybe I just had bad luck with Chinese cuisine or I just repulsed food that was unfamiliar, I thought to myself. It cannot be that I repulse all unfamiliar food! I exclaimed whilst recalling one last memory. It was one rainy night after a long day of classes and trips. After I returned from the trip, I asked a friend of the location of a nearby halal restaurant that was highlighted during the orientation day to the campus. I had heard the restaurant served good kebabs, so I was enthused to try it out. She drew a map of the location on a sticky note and I put it up on my phone screen to guide me. ","Following the map, I went eastwards from the south gate of the university. There was high mist that day and it drizzled. Under the tiny falling rain drops, I patiently waited for the green signal of pedestrian light to cross to Xiangcheng road. On Xiangcheng road, I walked onward and crossed at a zebra crossing to walk on the other side of the road. However, I almost got knocked down by first, a rogue taxi driver and then a speeding motorcycler. I walked past many departmental shops till I got to a T junction that had many restaurants across it. I impatiently waited for the green pedestrian light and crossed with a multitude of pedestrians that walked to either end of the road. Filtering through the restaurant names, I looked for anything that looked oriental. ","There it was, a shop that had a distinguished moon on its logo. Its name was all in Chinese, so I could not read it, However, I walked in, past the tent doors that covered an arc typical of Islamic architecture. On both sides of the lobby, there were various Islamic and more general Arabic artifacts beautifully arranged on shelves. These artifacts and the architecture convinced me that I was in the right place. The celling had a nice traditional palette design, and there was a beautiful calligraphy of an Arabic sentence at the end of the restaurant. There was a bar near the entrance that served a variety of beverages including juice, wine and beer. Out of the large menu book, I ordered and enjoyed red steamed rice and two sticks of mutton kebab. ","What is next for Prince? Well, I resolved to eat at the halal restaurant that night and found its name in English to be Yershari restaurant. A restaurant which served food that was closer to food at home than the food served at fast food restaurants. But would I love to live in Shanghai if there were numerous of these restaurants? Hmm, I still do not know! "];
 end = false; //game just began, dont end it just now!
 yPos = [0,0,0,0,0,0,0,0,0,0,0,0,0]; // initialize y position of first picutures
 changer1 = [0,0,0,0,0,0,0,0,0,0,0,0,0]; //show first picture in each box
 changer2 = [1,1,1,1,1,1,1,1,1,1,1,1,1]; //show second picture in each box
 yPos1 = [560,560,560,560,560,560,560,560,560,560,560,560,560]; //initialize y postion of next picture to picture height above the screen
 lampWidth = displayWidth/40; //width of the lamp
 lampHeight = displayHeight/40; //height of the lamp
 xSpeed = 10; //speed of moving lamps

 for(var i = 0; i < images.length; i++) //resize story pictures
 {
  for(var k = 0; k < images[i].length; k++)
  {
    images[i][k].resize(displayWidth/2,560);
  }
}

 xPos[0] = 0; //set first lamp to postion zero
 lampArray[0].resize(lampWidth,lampHeight); //resize lamp pictures

for(var j = 1; j < numLamp; j++) //resize and set initial postion of lamps
{
  xPos[j] = xPos[j-1] + displayWidth/(numLamp-2);
  lampArray[j].resize(lampWidth,lampHeight);
}

textRextX = rectTextX+(displayWidth+displayHeight)/300; //x coordinate of each text
colorMode(HSB); //change color mode for fireworks
gravity = createVector(0, 0.2); //gravity vecotr=or

restart_button.resize((displayWidth+displayHeight)/20,(displayWidth+displayHeight)/40); //resize restart button

//create restart sprite
restart_sprite = createSprite(((displayWidth/2)-((displayWidth+displayHeight)/120)),(displayHeight/2)-((displayWidth+displayHeight)/50));
restart_sprite.addImage(restart_button); //add image to restart sprite
}

function initPos()
{
  colorMode(RGB); //set color mode back to RGB
  textSize(22); //set text size to 22
  fill(183, 141, 66); //fill for text
  stroke(153, 113, 41); //color for text
  strokeWeight(1); //weight for text
  //display help text below rectangles
  text("Tap and hold the right button",((displayWidth/2)-((displayWidth+displayHeight)/25)),(displayHeight/2)+((displayWidth+displayHeight)/21));

  noStroke(); //turn stroke off
  strokeWeight(1); //reset stroke
  fill(122, 51, 15, 220); //fill for ellipses for memory shape
  //ellipses for memory shape
  ellipse(420,27.5*(displayHeight)/40,100,70);
  ellipse(360,29.2*(displayHeight)/40,70,50);
  ellipse(300,30*(displayHeight)/40,50,30);
  ellipse(250,30.5*(displayHeight)/40,40,25);

  //display lamps
  for(var i = 0; i < numLamp; i++)
  {
    image(lampArray[i],xPos[i],27*(displayHeight)/40);
  }

  //display cars
  for(var l = 0; l < 7; l++)
  {
    image(carArray[l],210+l*240,31.5*(displayHeight)/40);
  }

  //display bus
  image(bus,0,28.7*(displayHeight)/40);

  //main game engine 
  for(var q = 0; q < textArray.length; q++)
  {
    fill(200); //fill for text
    //varying font sizes for different rectangles
    if(q === 0)
    {
      textSize(55);
    }
    else if (q === 1 || q ==3 || q == 4  || q == 7)
    {
      textSize(40);
    }
    else if (q === 2)
    {
      textSize(40.7055);
    }
    else if (q === 5)
    {
      textSize(29.99);
    }
    else if (q === 6)
    {
      textSize(31);
    }
    else if(q == 8)
    {
      textSize(37);
    }
    else if(q == 9)
    {
      textSize(33);
    }
    else if (q == 10 || q == 11)
    {
      textSize(29.5);
    }
    else if (q == 12)
    {
      textSize(50);
    }
    //use monospace font
    textFont(fontNew);
    stroke(122, 51, 15);    //font color
    strokeWeight(1); //font weight
    text(textArray[q],(2*q*(displayWidth/2))+textRextX+displayWidth/2,90,displayWidth/2,553); //display text

    strokeWeight(5); //change weight for rectangles
    noFill(); //empty rectangles
    stroke(122, 51, 15); //color for rectangles
    rect(rectTextX+displayWidth/2+(2*q*(displayWidth/2)),90,displayWidth/2,553); //rectangle for text
    rect((rectTextX+(2*q*(displayWidth/2))),90,displayWidth/2,553); //rectangle for images

    //display first image
    image(images[q][changer1[q]] , (rectTextX+(2*q*(displayWidth/2))) , 90 , displayWidth/2 , 553, 0 , yPos[q] ,  displayWidth/2 , 553);
    //display next image
    image(images[q][changer2[q]] , (rectTextX+(2*q*(displayWidth/2))) , 90 , displayWidth/2 , 553, 0 , yPos1[q] ,  displayWidth/2 , 553);
    
    //slide first image
    if(yPos[q] < -555) //if slided off the screen
    {
      yPos[q] = 560; //reset position
      changer1[q] += 2; //change pictures
      if(changer1[q] >= images[q].length) //if array out of bound
        changer1[q] = 0; //reset index to start first image
    }

    //slide next image
    if(yPos1[q] < -555) //if slided off the screen
    {
      yPos1[q] = 560; //reset position
      changer2[q] += 2; //change pictures
      if(changer2[q] >= images[q].length) //if array out of bound
        changer2[q] = 1; //reset index to start second image
    }
    //picture engine, check if picture is at the start of the screen then animate it
    if((rectTextX != 0) && rectTextX > ((-4.5)/10)*displayWidth-(q*displayWidth) && rectTextX < ((1.5)/100)*displayWidth-(q*displayWidth))
    {
      yPos[q] -=6; //move first picture
      yPos1[q] -= 6; //move next picture
    }
  }

  noStroke(); //turn of stroke for drawing ellipses
  fill(122, 51, 15, 100);//first ellipse
  ellipse(420,27.5*(displayHeight)/40,100,70); //ellipse
  
  image(bus,0,28.7*(displayHeight)/40); //display bus

  fill(122, 51, 15, 150); //change opacity fill for ellipse

    //ellipses for memory shape
    ellipse(218,31*(displayHeight)/40,30,22);
    ellipse(195,31.2*(displayHeight)/40,14,12);
    ellipse(181,31.4*(displayHeight)/40,12,9);
    noFill(); //turn off fill for arc
    stroke(122, 51, 15); //stroke for arc
    strokeWeight(10); //weight for arc
    arc(displayWidth/2,80,displayWidth-displayWidth/130,100,PI,PI); //display upper arc
    arc(displayWidth/2,24.2*(displayHeight)/40,displayWidth-displayWidth/130,100,TWO_PI,PI); //display lower arc
    stroke(100); //stroke for road
    strokeWeight(10); //weight for road
    line(0,946,displayWidth,946); //draw road

    if(end) //if game ends
    {
      stroke(122, 51, 15, 150); //color for end text
      strokeWeight(5); //weight for end text
      textSize(150); //font size for end text
      //display end text
      text("The End!", (displayWidth/2)-((displayHeight+displayWidth)/10), displayHeight/2-((displayHeight+displayWidth)/20));
      drawSprites(); //display restart sprite
      restart_sprite.onMousePressed = function() //on click for restart sprite
      { 
        end = !end; //turn game back on
        beginGame(); //initialize the stuff
        restart_sprite.remove(); //remove restart sprite
        //start fireworks
        for (var b = fireworks.length - 1; b >= 0; b--) {
          fireworks[b].update(); //update 
          fireworks.splice(b, 1); //splice
        }
      };
      if (random(1) < 0.1) { //percent probability to display fireworks
        fireworks.push(new Firework()); //push into array
      }
      //display fireworks
      for (var b = fireworks.length - 1; b >= 0; b--) {
        fireworks[b].update(); //update
        fireworks[b].show(); //show

        if (fireworks[b].done()) { //splice out if done
          fireworks.splice(b, 1); //splice
        }
      }
    }
  }

//move traffic
function moveTraffic()
{
  if (keyIsDown(RIGHT_ARROW)) //check if key is pressed 
  {
    if(rectTextX > -1 * 13 * displayWidth) //while more rectangles left, keep moving them
    {  
      rectTextX -= xSpeed; //increment x postion of rectangles
      textRextX -= xSpeed; //increment x postion of text
    }
    //if almost at game end, turn on ending animation
    if (rectTextX < -1 * 12.7 * displayWidth){
      end = true;
    }

    bus.play(); //play bus gif

    //play car gifs
    for(var n = 0; n < 7; n++) 
    {
      carArray[n].play();
    }
    //move lamps to give illusion of vehicle movement
    for(var k = 0; k < numLamp; k++)
    {
      xPos[k] -= xSpeed;
      if(xPos[k]+lampWidth < 0)
      {
        xPos[k] = displayWidth - lampWidth + displayWidth/(numLamp-2);
      }
    }
  }
  //if key is not pressed, pause traffic
  else 
  {
    bus.pause(); //pause bus gif

    //pause cars gif
    for(var m = 0; m < 7; m++)
    {
      carArray[m].pause();
    }
  }
}

//runs once
function setup() {
  // put setup code here
  createCanvas(displayWidth,displayHeight); //create canvas fullscreen
  background(0); //set initial background image
  cursor(HAND); //use hand for cursor
  start_button.resize((displayWidth+displayHeight)/25,(displayWidth+displayHeight)/25); //resize start image
  //create restart sprite
  start_sprite = createSprite((displayWidth/2),(displayHeight/2)-((displayWidth+displayHeight)/11));
  start_sprite.addImage(start_button); //add restart image to restart sprite
  drawSprites(); //display sprites
  beginGame(); //initialize main game
  start_sprite.onMousePressed = function() //on click for restart sprite
  {
    begin = true; //start game
    start_sprite.remove(); //remove start sprite
    select("h1").hide(); //hide heading
  };
}

//runs all the time
function draw() {

  if(begin) //start game
  {
    background(0); //black background
    initPos(); //draw stuff
    moveTraffic(); //move stuff
  }
}
