

      
      function rollD20(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*20)+1;
        return roll;
      }
      
      function rollD12(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*12)+1;
        return roll;
      }
      
      function rollD10(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*10)+1;
        return roll;
      }
      
      function rollD8(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*8)+1;
        return roll;
      }
      
      function rollD6(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*6)+1;
        return roll;
      }
      
      function rollD4(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*4)+1;
        return roll;
      }

      function rollD2(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*2)+1;
        return roll;
      }
      
      function rollD100(){
        var roll = 0;
        roll = Number(roll);
        roll = Math.floor(Math.random()*100)+1;
        return roll;
      }
      
      function pleadSequence(){
        var secondChoice = 0;
        secondChoice = prompt("What choice do you make?");
        secondChoice = Number(secondChoice);
        return secondChoice;
      }
      
      function chestChoice(){
        var choice = 0;
        choice = prompt("What is your action choice?");
        choice = Number(choice);
        return choice;
        
      }
      
      function riddleChoice(){
        var choice = 0;
        choice = prompt("Which number is the answer to the riddle?");
        choice = Number(choice);
        return choice;
        
      }
      
      function endGame(){
        document.write("Congratulations you have defeated the evil wizard, and saved your girlfriend from certain doom. You should be very proud of yourself for having survived such a heroing ordeal. WELL DONE!");
        document.getElementById("choiceDialog").innerHTML = "";
    
        
        
      }
      
      function damageRoll(damageDie){
        
        if(damageDie === 12){
          damage = rollD12();
        }
        if(damageDie === 10){
          damage = rollD10();
        }
        if(damageDie === 8){
          damage = rollD8();
        }
        if(damageDie === 6){
          damage = rollD6();
        }
        if(damageDie === 4){
          damage = rollD4();
        }
        if(damageDie === 2){
          damage = rollD2();
        }
        return damage;          

      }
      
      function choice1(){        
        damage = 8;
        document.write("<br><fieldset><strong>II.</strong> You quickly grab the sword and engage the orc in battle!</fieldset><br>");

        combat1(hitPoints, damage, armorClass, saveVSSpell);
      }
      
      
      
      function choice2(){
         damage = 8;
        document.write("<br><fieldset><strong>II.</strong> You quickly grab the sword and engage the wizard in battle!</fieldset><br>");

        
        combat2(hitPoints, damage, armorClass, saveVSSpell);        
      }
      
      
      //New functions for new decision set up
      function choice3(){

      document.getElementById("narrator2").innerHTML = "<fieldset><strong>II.</strong><br>The wizard looks un-moved by your ernest pleas, but for a moment suddenly looks as if he has an idea and smiles a most devious smile.<br><br>Wizard: Give me a good reason why I should not disintigrate you where you stand?<br></fieldset>";

        
      document.getElementById("picture").innerHTML = "<img src=\"images/wizard.jpg\" alt=\"adventure photo\" width=\"300\" height=\"400\">";

      document.getElementById("narrator").innerHTML = "";

      document.getElementById("Choice1").innerHTML = "<section id=\"Choice1\" onclick=\"choice3Case1();\"><h1>What do you say? (click the text)</h1><br><br>1. I am a really good person and I have done nothing to harm you!</section>";
      document.getElementById("Choice2").innerHTML = "<section id=\"Choice2\" onclick=\"choice3Case2();\">2. I know where my master keeps all of his most valueable items.</section>";
      document.getElementById("Choice3").innerHTML = "<section id=\"Choice3\" onclick=\"choice3Case3();\">3. I want to join you and plunder for riches.</section>";
      document.getElementById("Choice4").innerHTML = "<section id=\"Choice4\" onclick=\"choice3Case4();\">4. You will not get any sick pleasure from me, having me plead for my life, do your worst foul wizard!</section>";
      document.getElementById("Choice5").innerHTML = "<section id=\"Choice5\" onclick=\"choice3Case5();\">5. I challenge you to a game of witts!</section>";
      document.getElementById("Choice6").innerHTML = "";
      
        
      }
      
      function choice4(){
        
        document.getElementById("narrator").innerHTML = "II. You quickly without losing a beat cowardly dash out the back door.<br>The orc and the wizard take your girlfriend on a pair of horses and ride out of town.<br><br>What do you do now?";
          
        document.getElementById("picture").innerHTML = "<img src=\"images/wizard.jpg\" alt=\"adventure photo\" width=\"300\" height=\"400\">";

        document.getElementById("narrator2").innerHTML = "<fieldset><strong>II.</strong><br>The wizard looks un-moved by your ernest pleas, but for a moment suddenly looks as if he has an idea and smiles a most devious smile.<br><br>Wizard: Give me a good reason why I should not disintigrate you where you stand?<br></fieldset>";
        
        document.getElementById("Choice1").innerHTML = "<section id=\"Choice1\" onclick=\"choice3Case1();\"><h1>What do you say? (click the text)</h1><br><br>1. I am a really good person and I have done nothing to harm you!</section>";
        document.getElementById("Choice2").innerHTML = "<section id=\"Choice2\" onclick=\"choice3Case2();\">2. I know where my master keeps all of his most valueable items.</section>";
        document.getElementById("Choice3").innerHTML = "<section id=\"Choice3\" onclick=\"choice3Case3();\">3. I want to join you and plunder for riches.</section>";
        document.getElementById("Choice4").innerHTML = "<section id=\"Choice4\" onclick=\"choice3Case4();\">4. You will not get any sick pleasure from me, having me plead for my life, do your worst foul wizard!</section>";
        document.getElementById("Choice5").innerHTML = "<section id=\"Choice5\" onclick=\"choice3Case5();\">5. I challenge you to a game of witts!</section>";
        document.getElementById("Choice6").innerHTML = "";
                
      }
      
      function choice5(){
        
      document.write("<br><fieldset><strong>II.</strong> You attempt to fight the orc with your bare hands.</fieldset><br>");
      
      combat1(hitPoints, damage, armorClass, saveVSSpell);        
        
        
      }
      
      
      function choice6(){
      document.write("<br><fieldset><strong>II.</strong> You attempt to fight the wizard with your bare hands.</fieldset><br>");

      combat2(hitPoints, damage, armorClass, saveVSSpell);        
        
        
      }
      
      
      
      function choice3Case1(){
        
      document.write("<fieldset><strong>II.</strong><br>You: I am a really good person and have done nothing to harm you.<br><br>Wizard: Foolish blacksmith apprentice this gives me all the more reason to destroy you!</fieldset>");

      combat1(hitPoints, damage, armorClass, saveVSSpell);
        
      }
      
      function choice3Case2(){
        
      document.getElementById("picture").innerHTML = "<img src=\"images/chest1.jpg\" alt=\"adventure photo\" width=\"500\" height=\"350\">";

      document.getElementById("narrator").innerHTML = "<fieldset><strong>III.</strong>You: I know where my master keeps all of his hidden treasure.<br><br>Wizard: Now this is most intriguing, by all means lead the way blacksmith apprentice.<br><br>You lead the orc and wizard to a room near the back where there is a large chest. You open the chest, and inside there is a beautifully crafted longsword and shield, along with a sack of coins.<br>What do you do?</fieldset><br>";

      document.getElementById("Choice1").innerHTML = "<section id=\"first\"  onclick=\"choice3Case2Case1();\">1. Grab the sword and sheild and attack the orc.</section>";
      document.getElementById("Choice2").innerHTML = "<section id=\"second\"  onclick=\"choice3Case2Case2();\">2. Grab the sword and shield and attack the wizard.</section>";
      document.getElementById("Choice3").innerHTML = "<section id=\"third\"  onclick=\"choice3Case2Case3();\">3. Step back and let the wizard take the items.</section>";
      document.getElementById("Choice4").innerHTML = "<section id=\"fourth\"  onclick=\"choice3Case2Case4();\">4. run away as the orc and wizard take the items.</section>";
      document.getElementById("Choice5").innerHTML = "";
      document.getElementById("Choice6").innerHTML = "";       
        
      }
      
      function choice3Case2Case1(){
        
      document.getElementById("picture").innerHTML = "";

      document.getElementById("narrator").innerHTML = "<fieldset><strong>IV.</strong>You quickly grab the enchanted sword and shield and attack the orc!</fieldset>";

      document.getElementById("Choice1").innerHTML = "";
      document.getElementById("Choice2").innerHTML = "";
      document.getElementById("Choice3").innerHTML = "";
      document.getElementById("Choice4").innerHTML = "";
      document.getElementById("Choice5").innerHTML = "";
      document.getElementById("Choice6").innerHTML = "";
      damage = 12;
      armorClass = armorClass - 5;
      combat1(hitPoints, damage, armorClass, saveVSSpell);      
      }
      
      function choice3Case2Case2(){
        
      document.getElementById("picture").innerHTML = "";

      document.getElementById("narrator").innerHTML = "<fieldset><strong>IV.</strong>You quickly grab the enchanted sword and shield and attack the wizard!</fieldset>";

      document.getElementById("Choice1").innerHTML = "";
      document.getElementById("Choice2").innerHTML = "";
      document.getElementById("Choice3").innerHTML = "";
      document.getElementById("Choice4").innerHTML = "";
      document.getElementById("Choice5").innerHTML = "";
      document.getElementById("Choice6").innerHTML = "";
      damage = 12;
      armorClass = armorClass - 5;
      combat2(hitPoints, damage, armorClass, saveVSSpell);      
        
      }
        
      function choice3Case2Case3(){
        
      document.getElementById("picture").innerHTML = "";

      document.getElementById("narrator").innerHTML = "<fieldset><strong>IV.</strong>You: Okay now that I have shown you where these items are now you will let me go right?<br><br>Wizard: It seems that I have had one of my characteristic changes of heart. Get him Snorg!</fieldset>";

      document.getElementById("Choice1").innerHTML = "";
      document.getElementById("Choice2").innerHTML = "";
      document.getElementById("Choice3").innerHTML = "";
      document.getElementById("Choice4").innerHTML = "";
      document.getElementById("Choice5").innerHTML = "";
      document.getElementById("Choice6").innerHTML = "";

      combat1(hitPoints, damage, armorClass, saveVSSpell);      
        
      }
      
      function choice3Case2Case4(){
        
      document.getElementById("picture").innerHTML = "";

      document.getElementById("narrator").innerHTML = "<fieldset><strong>IV.</strong>As the wizard and orc are salivating over the enchanted weapons in the chest, you take this as an opportunity to make your escape.<br>You dash out of the back door post-haste.</fieldset>";

      document.getElementById("Choice1").innerHTML = "";
      document.getElementById("Choice2").innerHTML = "";
      document.getElementById("Choice3").innerHTML = "";
      document.getElementById("Choice4").innerHTML = "";
      document.getElementById("Choice5").innerHTML = "";
      document.getElementById("Choice6").innerHTML = "";
   
        
      }      

      function choice3Case3(){
        
      document.write("<fieldset><strong>IV.</strong>You: I want to join you in your conquest of the land and plunder for treasure.<br><br>Wizard: Snorg and I have all the companionship that we want or need, you are wrong to think otherwise. Get him Snorg!</fieldset>");
        

      combat2(hitPoints, damage, armorClass, saveVSSpell);  
     
     
     
      }
      
      function choice3Case4(){
        
      document.write("<fieldset><strong>IV.</strong><br>You: You will not get any sick pleasure from me, having me plead for my life, do your worst foul wizard!<br><br>Wizard: You insolent whelp you will regret using that tone with me. Snorg get him!</fieldset>");

      
      combat1(hitPoints, damage, armorClass, saveVSSpell);  
     
      }
      
      function choice3Case5(){
        
      document.getElementById("narrator2").innerHTML = "<fieldset><strong>III.</strong><br>You: I challenge you to a game of witts!<br><br>Wizard: Very well but I will go first. Answer this riddle... <br><br>What is greater than God, <br>more evil than the devil, <br>the poor have it, <br>the rich need it, <br>and if you eat it, you'll die?</fieldset>";

      document.getElementById("picture").innerHTML = "<img src=\"images/riddle.jpg\" alt=\"adventure photo\" width=\"500\" height=\"350\">";
            
      document.getElementById("narrator").innerHTML = "<h1>What is your answer?</h1>";
  
      document.getElementById("Choice1").innerHTML = "<section id=\"first\"  onclick=\"choice3Case5Case1();\">1. Water</section>";
      document.getElementById("Choice2").innerHTML = "<section id=\"second\"  onclick=\"choice3Case5Case1();\">2. Light</section>";
      document.getElementById("Choice3").innerHTML = "<section id=\"third\"  onclick=\"choice3Case5Case1();\">3. Desire</section>";
      document.getElementById("Choice4").innerHTML = "<section id=\"fourth\"  onclick=\"choice3Case5Case4();\">4. Nothing</section>";
      document.getElementById("Choice5").innerHTML = "<section id=\"fifth\"  onclick=\"choice3Case5Case1();\">5. Love</section>";
      document.getElementById("Choice6").innerHTML = "";       
        
      }
 
      function choice3Case5Case1(){
      document.write("<fieldset>Wizard: Ha Ha, that is the wrong answer, well it was fun but now you must die. Very well, Snorg let's get him!</fieldset>");
      combat1(hitPoints, damage, armorClass, saveVSSpell);  
      } 
      
      function choice3Case5Case4(){

        var guess = rollD20();
        guess = Number(guess);
        if((guess + 14) >= 20){
                     
          document.getElementById("narrator2").innerHTML = "<fieldset><strong>IV.</strong>Wizard: Very well done I may not destroy you after all.<br><br>You: I have answered your riddle wizard now you must answer mine. Answer me this<br>Who makes it, has no need of it.<br>Who buys it, has no use for it.<br>Who uses it can neither see nor feel it.<br>What is it?<br>Wizard: hmmmm.. oh why that is obviously a coffin.<br> You: That is correct.<br>Wizard: Ha Ha, now you must answer me this...<br>If you have me, you want to share me. If you share me, you haven't got me. What am I?</fieldset>";

          document.getElementById("picture").innerHTML = "<img src=\"images/riddle22.jpg\" alt=\"adventure photo\" width=\"500\" height=\"350\">";

          
          document.getElementById("narrator").innerHTML = "";
            

          document.getElementById("Choice1").innerHTML = "<section id=\"first\"  onclick=\"choice3Case5Case4Case1();\">1. Life</section>";
          document.getElementById("Choice2").innerHTML = "<section id=\"second\"  onclick=\"choice3Case5Case4Case1();\">2. Darkness</section>";
          document.getElementById("Choice3").innerHTML = "<section id=\"third\"  onclick=\"choice3Case5Case4Case3();\">3. Secret</section>";
          document.getElementById("Choice4").innerHTML = "<section id=\"fourth\"  onclick=\"choice3Case5Case4Case1();\">4. Pleasure</section>";
          document.getElementById("Choice5").innerHTML = "<section id=\"fifth\"  onclick=\"choice3Case5Case4Case1();\">5. Anticipation</section>";
          document.getElementById("Choice6").innerHTML = "";       
        }else{
          document.getElementById("narrator2").innerHTML = "<fieldset><strong>IV.</strong>Wizard: is it Darkness? <br><br>You: that is incorrect wizard you have lost this game of witts, now you must leave me and my girlfriend alone!<br><br>Wizard: Very well, but if I ever see you again I shall incinerate you where you stand. Come Snorg let's go.</fieldset>";

          document.getElementById("picture").innerHTML = "<img src=\"images/end2.jpg\" alt=\"adventure photo\" width=\"500\" height=\"350\">";

          
          document.getElementById("narrator").innerHTML = "Congratulations you have defeated the evil wizard, and saved your girlfriend from certain doom. You should be very proud of yourself for having survived such a heroing ordeal. WELL DONE!";
            

          document.getElementById("Choice1").innerHTML = "";
          document.getElementById("Choice2").innerHTML = "";
          document.getElementById("Choice3").innerHTML = "";
          document.getElementById("Choice4").innerHTML = "";
          document.getElementById("Choice5").innerHTML = "";
          document.getElementById("Choice6").innerHTML = "";          

        var audio2 = new Audio('endMusic.mp3');

        audio.pause();
        
        audio2.play();
        }
      }

      function choice3Case5Case4Case1(){
      document.write("<fieldset>Wizard: Ha Ha, that is the wrong answer, well it was fun but now you must die. Very well, Snorg let's get him!</fieldset>");
      combat1(hitPoints, damage, armorClass, saveVSSpell);
      } 

      
      function choice3Case5Case4Case3(){
        var guess = rollD20();
        guess = Number(guess);
        if((guess + 18) >= 20){
                     
          document.getElementById("narrator2").innerHTML = "<fieldset><strong>IV.</strong><br>Wizard: Very impressive I did not think you looked like the intellectual type, I may even have some use for you.<br>You: I have answered your riddle wizard now you must answer mine. Answer me this<br>Feed me and I live, yet give me a drink and I die.<br>What am I?<br>Wizard: Are you fire?<br> You: That is correct.<br>Wizard: Ha Ha, now you must answer me this...<br>Alive without breath, <br>As cold as death;<br>Never thirsty, ever drinking,<br>All in mail never clinking.<br>What is it?</fieldset>";

          document.getElementById("picture").innerHTML = "<img src=\"images/riddle3.jpg\" alt=\"adventure photo\" width=\"250\" height=\"350\">";

          
          document.getElementById("narrator").innerHTML = "";
            
          document.getElementById("Choice1").innerHTML = "<section id=\"first\"  onclick=\"choice3Case5Case4Case3Case1();\">1. Bird</section>";
          document.getElementById("Choice2").innerHTML = "<section id=\"second\"  onclick=\"choice3Case5Case4Case3Case2();\">2. Fish</section>";
          document.getElementById("Choice3").innerHTML = "<section id=\"third\"  onclick=\"choice3Case5Case4Case3Case1();\">3. Tree</section>";
          document.getElementById("Choice4").innerHTML = "<section id=\"fourth\"  onclick=\"choice3Case5Case4Case3Case1();\">4. The Earth</section>";
          document.getElementById("Choice5").innerHTML = "<section id=\"fifth\"  onclick=\"choice3Case5Case4Case3Case1();\">5. Pleasure</section>";
          document.getElementById("Choice6").innerHTML = "";       
          }else{
            document.getElementById("narrator2").innerHTML = "<fieldset><strong>IV.</strong>Wizard: Are you water elemental? <br><br>You: that is incorrect wizard you have lost this game of witts, now you must leave me and my girlfriend alone!<br><br>Wizard: Very well, but if I ever see you again I shall incinerate you where you stand. Come Snorg let's go.";

            document.getElementById("picture").innerHTML = "<img src=\"images/end2.jpg\" alt=\"adventure photo\" width=\"500\" height=\"350\">";

            
            document.getElementById("narrator").innerHTML = "Congratulations you have defeated the evil wizard, and saved your girlfriend from certain doom. You should be very proud of yourself for having survived such a heroing ordeal. WELL DONE!";
              

            document.getElementById("Choice1").innerHTML = "";
            document.getElementById("Choice2").innerHTML = "";
            document.getElementById("Choice3").innerHTML = "";
            document.getElementById("Choice4").innerHTML = "";
            document.getElementById("Choice5").innerHTML = "";
            document.getElementById("Choice6").innerHTML = "";          

          var audio2 = new Audio('endMusic.mp3');

          audio.pause();
          
          audio2.play();         
          
          
        }        


      
      }
      
      function choice3Case5Case4Case3Case1(){
      document.write("<fieldset>Wizard: Ha Ha, that is the wrong answer, well it was fun but now you must die. Very well, Snorg let's get him!</fieldset>");
      combat1(hitPoints, damage, armorClass, saveVSSpell);

      }

      
      

      function choice3Case5Case4Case3Case2(){
            document.getElementById("narrator2").innerHTML = "<fieldset><strong>IV.</strong>You: Are you a fish?<br><br>Wizard: You are correct.<br><br>You: Okay now I have answered enough of your questions now you must leave me and my girlfriend be!<br><br>Wizard: Very well we shall leave you be, but do not let me catch in crohn wood. Let's go Snorg.";

            document.getElementById("picture").innerHTML = "<img src=\"images/end2.jpg\" alt=\"adventure photo\" width=\"500\" height=\"350\">";

            
            document.getElementById("narrator").innerHTML = "Congratulations you have defeated the evil wizard, and saved your girlfriend from certain doom. You should be very proud of yourself for having survived such a heroing ordeal. WELL DONE!";
              

            document.getElementById("Choice1").innerHTML = "";
            document.getElementById("Choice2").innerHTML = "";
            document.getElementById("Choice3").innerHTML = "";
            document.getElementById("Choice4").innerHTML = "";
            document.getElementById("Choice5").innerHTML = "";
            document.getElementById("Choice6").innerHTML = "";          

          var audio2 = new Audio('endMusic.mp3');

          audio.pause();
          
          audio2.play();  
        
        
      }
      
      

      
      
      
      function wizardCastHold(save){
        var roll = 0;
        var holdEffect = false;
        var duration = 0;
        duration = Number(duration);
        roll = Number(roll);
        document.write("<font color=\"red\"><p>The wizard casts a hold spell on you, you must make a save VS spell.</p></font>");
        roll = rollD20();
        document.write("<font color=\"red\"><p>You have rolled a " + roll + " on the d20.</p></font>");
        if((roll + save) < 20){
          holdEffect = true;
          duration = rollD4();
          document.write("<font color=\"red\"><p>You have failed the save VS spell check.<br>You are held!<p><br></font>");
        }else{
          document.write("<font color=\"red\"><p>You successfully avoided the effects of the wizards hold spell.<p><br></font>");
        }
        return [holdEffect, duration];
      }
      
      function wizardCastMagicMissile(){
        var spellDamage = 0;
        spellDamage = Number(spellDamage);
        document.write("<font color=\"red\"><p>The wizard casts red and green magic missile at you!</p></font>");
        spellDamage = rollD4();
        document.write("<font color=\"red\"><p>The wizard has inflicted " + spellDamage + " points of damage to you.<p><br></font>");
        return spellDamage;
      }
      
      function wizardCastFireBolt(){
        var spellDamage = 0;
        spellDamage = Number(spellDamage);
        spellDamage = rollD6();
        
        document.write("<font color=\"red\"><p>A bolt of fire is forced from the wizards hands toward you!</p></font>");
        document.write("<font color=\"red\"><p>The wizard has inflicted " + spellDamage + " points of damage to you.<p><br></font>");
        
        return spellDamage;  
      }
      
      function wizardSwingStaff(armorRating){
        var roll = 0;
        var staffDamage = 0;
        roll = Number(roll);
        staffDamage = Number(staffDamage);
        roll = rollD20();
        roll = roll - 4;
        document.write("<font color=\"red\"><p>The wizard swing at you with his staff!</font>");
        document.write("<font color=\"red\"><p>the wizard rolled " + roll + "</p></font>");
        if((roll + armorRating) >= 20){
          document.write("<font color=\"red\"><p>The wizard hits you with his staff.</p></font>");
          staffDamage = rollD4();
          document.write("<font color=\"red\"><p>The wizard deals " + staffDamage + " to you.<p><br></font>");
        }else{
          document.write("<font color=\"red\"><p>The wizard misses you with his staff.<p><br></font>");
        }
        return staffDamage;
        
      }
      
      
      function death(){
        alert("You have died. Please try again. (press back on the browser to start over)");
      }
      
      
      
      
      
      
      function combat1(currentHealth, weaponDamage, currentArmorClass, spellSave){
        
        var orcHealth = 8;
        var orcArmorClass = 4;
        var orcWeaponDamage = 6;
        var damage = 0;
        var wizardHealth = 4;
        var wizardArmorClass = 8;
        var wizardMagicMissleDamage = 4;
        var wizardAttackChoice = 0;
        var holdEffect = false;
        var holdEffectCount = 0;
        var holdSpell;
        var holdCount = 0;
        
        
        wizardHealth = Number(wizardHealth);
        orcHealth = Number(orcHealth);
        orcArmorClass = Number(orcArmorClass);
        orcWeaponDamage = Number(orcWeaponDamage);
        damage = Number(damage);
        wizardAttackChoice = Number(wizardAttackChoice);
        holdEffectCount = Number(holdEffectCount);
        holdCount = Number(holdCount);
        
        document.write("<img src=\"images/orc2.jpg\" alt=\"orc portrait\" width=\"300\" height=\"400\">");
        //document.write("<p id = \"picuture\"></p>");
        //document.getElementById("picture").innerHTML = "<img src=\"images/orc2.jpg\" alt=\"adventure photo\" width=\"300\" height=\"400\">"

       // document.getElementById("narrator").innerHTML = "<p>Hey I am narrator text durring the battle<p>";

        //document.getElementById("Choice1").innerHTML = "<p>make a choice1?</p></font>";
        //document.getElementById("Choice2").innerHTML = "";
        //document.getElementById("Choice3").innerHTML = "";
        //document.getElementById("Choice4").innerHTML = "";
        //document.getElementById("Choice5").innerHTML = "";
        //document.getElementById("Choice6").innerHTML = "";
      
        
        
        while((currentHealth > 0 && orcHealth > 0) || (currentHealth > 0 && wizardHealth > 0)){
        

          
          if(holdCount >= holdEffectCount){
            holdEffect = false;
          }
          holdCount++;          
          
          if(holdEffect == true){
            currentArmorClass = 10;
          }else{
            currentArmorClass = 8;
          }
         
          //player's attack
          //check if player is held
          if(holdEffect == true){
            document.write("<font color=\"blue\"><p>You are held and can not attack this round.<p><br></font></font>");
            

          }else{
          //attack the orc while the wizard is still alive
            if(orcHealth > 0){
            document.write("<font color=\"blue\"><p>You attack the orc.</p></font>");
            attackRoll = rollD20();
            document.write("<font color=\"blue\"><p>You roll a " + attackRoll + " on the d20.</p></font>");
            if((attackRoll + orcArmorClass) >= 20){
              document.write("<font color=\"blue\"><p>You have sucessfully hit the orc!</p></font>");
              //determine die to roll for damage based on weapon damage factor
              damage = damageRoll(weaponDamage);
              orcHealth = orcHealth - damage;
              document.write("<font color=\"blue\"><p>You have dealt " + damage + " damage to the orc.<p><br></font>");
              if(orcHealth <= 0){
                document.write("<font color=\"blue\"><p>You have slain the orc!<p><br></font>");
              }
            
            }else{
              document.write("<font color=\"blue\"><p>You missed!<p><br></font>");
            }
            //attacking the wizard after the orc is dead
            }else{
            document.write("<font color=\"blue\"><p>You attack the wizard.</p></font>");
            attackRoll = rollD20();
            document.write("<font color=\"blue\"><p>You roll a " + attackRoll + " on the d20.</p></font>");
            if((attackRoll + wizardArmorClass) >= 20){
              document.write("<font color=\"blue\"><p>You have sucessfully hit the wizard!</p></font>");
              //determine die to roll for damage based on weapon damage factor
              damage = damageRoll(weaponDamage);
              wizardHealth = wizardHealth - damage;
              document.write("<font color=\"blue\"><p>You have dealt " + damage + " damage to the wizard.<p><br></font>");
            }else{
              document.write("<font color=\"blue\"><p>You missed!<p><br></font>");
            }            
            }
          }
          
          //orc attack
          //check if orc is alive
          if(orcHealth <= 0){
          
          }else{
            if(orcHealth > 0){
              document.write("<font color=\"green\"><p>The orc swings his axe at you!</p></font>");
              attackRoll = rollD20();
              if((attackRoll + currentArmorClass) >= 20){
                document.write("<font color=\"green\"><p>The orc has hit you!</p></font>");
                damage = rollD6();
                document.write("<font color=\"green\"><p>The orc has dealt " + damage + " damage to you.<p><br></font>");
                currentHealth = currentHealth - (damage/3);
                damage = 0;
              }else{
                document.write("<font color=\"green\"><p>The orc has missed!<p><br></font>");
              }
            }else{
              document.write("<font color=\"green\"><p>You have slain the orc!<br>Well done!<p><br></font>");
            }
          }
          
          //Wizard Attack
          //check if the wizard is alive
          if(wizardHealth <= 0){
          
          }else{
            
            wizardAttackChoice = rollD4();
            if(wizardHealth > 0){
              switch(wizardAttackChoice){
                case 1:
                  holdCount = 0; 
                  holdSpell = wizardCastHold(spellSave);
                  holdEffect = holdSpell[0];
                  holdEffectCount = holdSpell[1];
                  if(holdEffect == true){
                  document.write("<font color=\"red\"><p>You will be held for " + holdEffectCount + " rounds.<p><br></font>");
                  }
                  break;
                case 2:
                  damage = wizardCastMagicMissile();
                  break;
                case 3:
                  damage = wizardCastFireBolt();
                  break;
                case 4:
                  damage = wizardSwingStaff(currentArmorClass);
                  break;
                default:
                  document.write("<font color=\"red\"><p>Wizard does nothing.</p></font>");
              }
              currentHealth = currentHealth - (damage/3);
              
            }else{
              document.write("<font color=\"red\"><p>You have slain the wizard.</p></font>");
            }
          }
         
        }
        
        document.write("The battle is over.<br>");
        if(currentHealth > 0){
          alert("Congratulations you have successfully slain the orc and Wizard.<br>You have also successfully saved your girlfriend!<br>Surely the blessings of luck shine upon you this day!");
        }else{
          death();
        }
        
        
      }
      
function combat2(currentHealth, weaponDamage, currentArmorClass, spellSave){
        var orcHealth = 8;
        var orcArmorClass = 4;
        var orcWeaponDamage = 6;
        var damage = 0;
        var wizardHealth = 4;
        var wizardArmorClass = 8;
        var wizardMagicMissleDamage = 4;
        var wizardAttackChoice = 0;
        var holdEffect = false;
        var holdEffectCount = 0;
        var holdSpell;
        var holdCount = 0;
        
        
        wizardHealth = Number(wizardHealth);
        orcHealth = Number(orcHealth);
        orcArmorClass = Number(orcArmorClass);
        orcWeaponDamage = Number(orcWeaponDamage);
        damage = Number(damage);
        wizardAttackChoice = Number(wizardAttackChoice);
        holdEffectCount = Number(holdEffectCount);
        holdCount = Number(holdCount);
        
        document.write("<img src=\"images/wizard4.jpg\" alt=\"orc portrait\" width=\"300\" height=\"400\">");

        
        while((currentHealth > 0 && orcHealth > 0) || (currentHealth > 0 && wizardHealth > 0)){
              
         // document.getElementById("picture").innerHTML = "<img src=\"images/wizard4.jpg\" alt=\"adventure photo\" width=\"150\" height=\"200\">"


              
          if(holdCount >= holdEffectCount){
            holdEffect = false;
          }
          holdCount++;          
          
          if(holdEffect == true){
            currentArmorClass = 10;
          }else{
            currentArmorClass = 8;
          }
         
          //player's attack
          //check if player is held
          if(holdEffect == true){
            document.write("<font color=\"blue\"><p>You are held and can not attack this round.<p><br></font>");
          }else{
          //attack the wizard while the orc is still alive
            if(wizardHealth > 0){
            document.write("<font color=\"blue\"><p>You attack the wizard.</p></font>");
            attackRoll = rollD20();
            document.write("<font color=\"blue\"><p>You roll a " + attackRoll + " on the d20.</p></font>");
            if((attackRoll + wizardArmorClass) >= 20){
              document.write("<font color=\"blue\"><p>You have sucessfully hit the wizard!</p></font>");
              //determine die to roll for damage based on weapon damage factor
              damage = damageRoll(weaponDamage);
              wizardHealth = wizardHealth - damage;
              document.write("<font color=\"blue\"><p>You have dealt " + damage + " damage to the wizard.<p><br></font>");
              if(wizardHealth <= 0){
                document.write("<font color=\"blue\"><p>You have slain the wizard!<p><br></font>");
              }
            
            }else{
              document.write("<font color=\"blue\"><p>You missed!<p><br></font>");
            }
            //attacking the orc after the wizard is dead
            }else{
            document.write("<font color=\"blue\"><p>You attack the orc.</p></font>");
            attackRoll = rollD20();
            document.write("<font color=\"blue\"><p>You roll a " + attackRoll + " on the d20.</p></font>");
            if((attackRoll + orcArmorClass) >= 20){
              document.write("<font color=\"blue\"><p>You have sucessfully hit the orc!</p></font>");
              //determine die to roll based on weapon damage factor
              damage = damageRoll(weaponDamage);
              orcHealth = orcHealth - damage;
              document.write("<font color=\"blue\"><p>You have dealt " + damage + " damage to the orc.<p><br></font>");
            }else{
              document.write("<font color=\"blue\"><p>You missed!<p><br></font>");
            }            
            }
          }
          
          //orc attack
          //check if orc is alive
          if(orcHealth <= 0){
          
          }else{
            if(orcHealth > 0){
              document.write("<font color=\"green\"><p>The orc swings his axe at you!</p></font>");
              attackRoll = rollD20();
              if((attackRoll + currentArmorClass) >= 20){
                document.write("<font color=\"green\"><p>The orc has hit you!</p></font>");
                damage = rollD6();
                document.write("<font color=\"green\"><p>The orc has dealt " + damage + " damage to you.<p><br></font>");
                currentHealth = currentHealth - (damage/3);
                damage = 0;
              }else{
                document.write("<font color=\"green\"><p>The orc has missed!<p><br></font>");
              }
            }else{
              document.write("<font color=\"green\"><p>You have slain the orc!<br>Well done!<p><br></font>");
            }
          }
          
          //Wizard Attack
          //check if the wizard is alive
          if(wizardHealth <= 0){
          
          }else{
            
            wizardAttackChoice = rollD4();
            if(wizardHealth > 0){
              switch(wizardAttackChoice){
                case 1:
                  holdCount = 0; 
                  holdSpell = wizardCastHold(spellSave);
                  holdEffect = holdSpell[0];
                  holdEffectCount = holdSpell[1];
                  if(holdEffect == true){
                    document.write("<font color=\"red\"><p>You will be held for " + holdEffectCount + " rounds.<p><br></font>");
                  }
                  break;
                case 2:
                  damage = wizardCastMagicMissile();
                  break;
                case 3:
                  damage = wizardCastFireBolt();
                  break;
                case 4:
                  damage = wizardSwingStaff(currentArmorClass);
                  break;
                default:
                  document.write("<font color=\"red\"><p>Wizard does nothing.</p></font>");
              }
              currentHealth = currentHealth - (damage/3);
              
            }
          }
         
        }
        
        document.write("The battle is over.<br>");
        if(currentHealth > 0){
          alert("Congratulations you have successfully slain the orc and Wizard.  You have also successfully saved your girlfriend!  Surely the blessings of luck shine upon you this day!");
        }else{
          death();
        }
        
        
      
      }