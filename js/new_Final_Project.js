      //Declare global variables
      var hitPoints = 8;
      var armorClass = 8;
      var damage = 4;
      var saveVSSpell = 10;
      
      //Declare boolean variables
      var chest = false;
      var run = false;
      var guard = false;
      var bread = false;
      var bar = false;
      var shield = false;
      var chainmail = false;
      var door = false;
      var windo = false;
      var guessCount = 0;
      
      //Declare music globally
      var audio = new Audio('music/battleMusic5.mp3');
      var audio2 = new Audio('music/endMusic.mp3');
      var audio3 = new Audio('music/outsideMusic2.mp3');
      var audio4 = new Audio('music/townSong6.mp3');
      var audio5 = new Audio('music/deathSong1.mp3');

      //start first sound track
      audio.play();
      
      //scroll to the top of the screen done for most choice screens
      scroll(0,0);
      
    function Main(){
     
      document.write("<link href=\"../stylesheets/stylesheet.css\" rel=\"stylesheet\">")

      //Declare Variables
      var hitPoints = 8;
      var armorClass = 8;
      var damage = 4;
      var saveVSSpell = 10;
      var count = 0;
      
      saveVSSpell = Number(saveVSSpell);
      hitPoints = Number(hitPoints);
      armorClass = Number(armorClass);
      damage = Number(damage);
      count = Number(count);
       
      
      
      
      //output to the screen the necessary information
      //frame for most the pages with choices, pictures, and narration
      document.write("<p id=\"stats\"></p>");


      document.write("<p id=\"narrator2\"></p>");


      document.write("<section id=\"picture\"></section>");

      document.write("<p id=\"narrator\"></p>");
      
      document.write("<p id=\"Choice1\"></p>");
      document.write("<p id=\"Choice2\"></p>");
      document.write("<p id=\"Choice3\"></p>");      
      document.write("<p id=\"Choice4\"></p>");
      document.write("<p id=\"Choice5\"></p>");
      document.write("<p id=\"Choice6\"></p>");
      document.write("<p id=\"inputBox\"></p>");
      
      
      
      
      
      //output source for this frame
      
      document.getElementById("stats").innerHTML = "Hit Points = " + hitPoints + "<br>Armor Class = " + armorClass + "<br>Save VS Spell = " + saveVSSpell + "<br>Damage = " + damage + "<br>";
      
      document.getElementById("picture").innerHTML = "<img src=\"images/blacksmith.jpg\" alt=\"adventure photo\" width=\"560\" height=\"370\">";
      
      document.getElementById("narrator").innerHTML = "<fieldset><strong>I.</strong> You are are finished working as an apprentice in your local blacksmith shop.<br>As he quenches the last piece of iron at the end of the day<br>you notice your girlfriend enter the door. <br>She hugs you, kisses your cheek,<br>and says that she is glad that you are finally done working. <br>No sooner than the final piece of metal is cooled <br>a large orc and a wizard in a red robe barge in through blacksmith shop door. <br>The orc deals a deadly blow to your master, while the wizard appears to start casting a spell.<br> The Orc turns to your girlfriend and grabs her as if he intends to take her with him...</fieldset> <br>";
      
      document.getElementById("Choice1").innerHTML = "<section id=\"first\"  onclick=\"choice1();\"><h1>What do you do? (click the text)</h1><br><br>1. Grab the sword the master just finished making and attack the orc.</section>";
      document.getElementById("Choice2").innerHTML = "<section id=\"second\" onclick=\"choice2();\">2. Grab the sword the master just finished making and attack the wizard.</section>";
      document.getElementById("Choice3").innerHTML = "<section id=\"third\"  onclick=\"choice3();\">3. Plead with the orc and wizard to leave you alone.</section>";
      document.getElementById("Choice4").innerHTML = "<section id=\"fourth\" onclick=\"town();\">4. Run out of the back door.</section>";
      document.getElementById("Choice5").innerHTML = "<section id=\"fifth\"  onclick=\"choice5();\">5. Attack the orc.</section>";
      document.getElementById("Choice6").innerHTML = "<section id=\"sixth\"  onclick=\"choice6();\">6. Attack the wizard.</section>";

      document.getElementById("inputBox").innerHTML = "<section id=\"sixth\"  onclick=\"choice6();\"></section>";
      audio.play();
    }
      
      
      Main();
      
      
      
      
      
      