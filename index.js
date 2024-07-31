
//LOADED ATTACK LOGIC

var selectedAttack = null;

function selectAttack(attackID){
    selectedAttack = attackID;
    switch(selectedAttack){
        case "pactBlade":
            document.getElementById("attackHeader").textContent = "Pact Blade Ready";
            break;
        case "eldBlast":
            //var spellReadyAudio = Audio("./sounds/spellcharge.wav");
            //spellReadyAudio.play();
            document.getElementById("attackHeader").textContent = "Eldritch Blast Ready";
            break;
        case "hellishRebuke":
            //var spellReadyAudio = Audio("./sounds/spellcharge.wav");
            //spellReadyAudio.play();
            document.getElementById("attackHeader").textContent = "Hellish Rebuke Ready";
            break;
        case "vampiricTouch":
            //var spellReadyAudio = Audio("./sounds/spellcharge.wav");
            //spellReadyAudio.play();
            document.getElementById("attackHeader").textContent = "Vampiric Touch Ready";
            break;
        case "eldritchSmite":
            //var spellReadyAudio = Audio("./sounds/spellcharge.wav");
            //spellReadyAudio.play();
            document.getElementById("attackHeader").textContent = "Eldritch Smite Ready";
            break;
        case "banishingSmite":
            //var spellReadyAudio = Audio("./sounds/spellcharge.wav");
            //spellReadyAudio.play();
            document.getElementById("attackHeader").textContent = "Banishing Smite Ready";
            break;
        case "coneOfCold":
            //var spellReadyAudio = Audio("./sounds/spellcharge.wav");
            //spellReadyAudio.play();
            document.getElementById("attackHeader").textContent = "Cone of Cold Ready";
            break;
        case "crownOfStars":
            //var spellReadyAudio = Audio("./sounds/spellcharge.wav");
            //spellReadyAudio.play();
            document.getElementById("attackHeader").textContent = "Crown of Stars Ready";
            break;
        case "shapechange":
            document.getElementById("attackHeader").textContent = "Shapechange Ready";
            break;
        default:
            document.getElementById("attackHeader").textContent = "Select an Attack!";
        }
}


//ATTACK DATA 


function basicAttack() {
    var slashAudio = new Audio("./sounds/slash.mp3");
    slashAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 2;
    var attackType = "";
    var attackRoll = 0;
    var intToHit = 0;
    var intDmg = 0;
    var toHit = "";
    var dmg = "";
    var crit = 1;
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
        if(i <= 1) {
            attackType = "Pact Blade";
            attackRoll = (Math.floor(Math.random() * 20) + 1);
            if (attackRoll === 20){
                crit = 2;
                document.getElementById(hitID).style.color = "#802BB1";
            }else {
                document.getElementById(hitID).style.color = "#d1d7e0";    
            }
            intToHit =  attackRoll + 17;
            intDmg = ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1))*crit + 10;
            toHit = attackType + " - Hit Value: " + intToHit;
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = toHit;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
        }
    }
    document.getElementById("divider0").style.visibility = "visible";
}

function eldritchBlast(){
    var blastAudio = new Audio("./sounds/eldritchblast.wav");
    blastAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 4;
    var attackType = "";
    var attackRoll = 0;
    var intToHit = 0;
    var intDmg = 0;
    var toHit = "";
    var dmg = "";
    var crit = 1;
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
        attackType = "Eldritch Blast";
        attackRoll = (Math.floor(Math.random() * 20) + 1);
        if (attackRoll === 20){
            crit = 2;
            document.getElementById(hitID).style.color = "#802BB1";
        }else {
            document.getElementById(hitID).style.color = "#d1d7e0";    
        }
        intToHit =  attackRoll + 11;
        intDmg = ((Math.floor(Math.random() * 10) + 1))*crit + 5;
        toHit = attackType + " - Hit Value: " + intToHit;
        dmg = "Damage: " + intDmg + " hp";
        document.getElementById(hitID).textContent = toHit;
        document.getElementById(dmgID).textContent = dmg;
        crit = 1;
    }
    document.getElementById("divider0").style.visibility = "visible";
    document.getElementById("divider1").style.visibility = "visible";
    document.getElementById("divider2").style.visibility = "visible";
}

function marilithAttack() {
    var shapeChangeAudio = new Audio("./sounds/Shapechange.wav");
    shapeChangeAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "visible";
    });
    var numAttacks = 7;
    var attackType = "";
    var attackRoll = 0;
    var intToHit = 0;
    var intDmg = 0;
    var toHit = "";
    var dmg = "";
    var crit = 1;
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
        if(i <= 1) {
            attackType = "Pact Blade";
            attackRoll = (Math.floor(Math.random() * 20) + 1);
            if (attackRoll === 20){
                crit = 2;
                document.getElementById(hitID).style.color = "#802BB1";
            }else {
                document.getElementById(hitID).style.color = "#d1d7e0";    
            }
            intToHit =  attackRoll + 17;
            intDmg = ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1))*crit + 10;
            toHit = attackType + " - Hit Value: " + intToHit;
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = toHit;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
        }else if(i > 1 && i <= 5){
            var attackType = "Long Sword"
            attackRoll = (Math.floor(Math.random() * 20) + 1);
            if (attackRoll === 20){
                crit = 2;
                document.getElementById(hitID).style.color = "#802BB1";
            }else {
                document.getElementById(hitID).style.color = "#d1d7e0";    
            }
            intToHit =  attackRoll + 9;
            intDmg = ((Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1))*crit + 4;
            toHit = attackType + " - Hit Value: " + intToHit;
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = toHit;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
        }else {
            var attackType = "Tail Attack"
            attackRoll = (Math.floor(Math.random() * 20) + 1);
            if (attackRoll === 20){
                crit = 2;
                document.getElementById(hitID).style.color = "#802BB1";
            }else {
                document.getElementById(hitID).style.color = "#d1d7e0";    
            }
            intToHit =  attackRoll + 9;
            intDmg = ((Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1))*crit + 4;
            toHit = attackType + " - Hit Value: " + intToHit;
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = toHit;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
        }
    }
}

function hellishRebuke() {
    var fireAudio = new Audio("./sounds/fireattack.wav");
    fireAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 1;
    var intDmg = 0;
    var dmg = "";
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
            attackType = "Type: Fire";
            intDmg = ((Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1));
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = attackType;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
    }

}

function vampiricTouch() {
    var vampAudio = new Audio("./sounds/vamptouch.mp3");
    vampAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 1;
    var attackType = "";
    var attackRoll = 0;
    var intToHit = 0;
    var intDmg = 0;
    var toHit = "";
    var dmg = "";
    var crit = 1;
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
        attackType = "Vampiric Touch";
        attackRoll = (Math.floor(Math.random() * 20) + 1);
        if (attackRoll === 20){
            crit = 2;
            document.getElementById(hitID).style.color = "#802BB1";
        }else {
            document.getElementById(hitID).style.color = "#d1d7e0";    
        }
        intToHit =  attackRoll + 11;
        intDmg = ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1))*crit;
        toHit = attackType + " - Hit Value: " + intToHit;
        dmg = "Damage: " + intDmg + " hp";
        document.getElementById(hitID).textContent = toHit;
        document.getElementById(dmgID).textContent = dmg;
        crit = 1;
    }
}

function eldritchSmite() {
    var smiteAudio = new Audio("./sounds/smite.mp3");
    smiteAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 1;
    var intDmg = 0;
    var dmg = "";
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
            attackType = "Enemy Knocked Prone";
            intDmg = ((Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1));
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = attackType;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
    }

}

function banishingSmite() {
    var banishAudio = new Audio("./sounds/banish.wav");
    banishAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 1;
    var intDmg = 0;
    var dmg = "";
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
            attackType = "Banish Under 50hp";
            intDmg = ((Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1));
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = attackType;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
    }

}

function coneOfCold() {
    var iceAudio = new Audio("./sounds/icespell.wav");
    iceAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 1;
    var intDmg = 0;
    var dmg = "";
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
            attackType = "60ft Cone";
            intDmg = ((Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1));
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = attackType;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
    }

}

function crownOfStars(){
    var crownStarsAudio = new Audio("./sounds/crownstars.mp3");
    crownStarsAudio.play();
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "hidden";
    });
    var numAttacks = 1;
    var attackType = "";
    var attackRoll = 0;
    var intToHit = 0;
    var intDmg = 0;
    var toHit = "";
    var dmg = "";
    var crit = 1;
    for (i = 0; i < numAttacks; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
        attackType = "Star Attack";
        attackRoll = (Math.floor(Math.random() * 20) + 1);
        if (attackRoll === 20){
            crit = 2;
            document.getElementById(hitID).style.color = "#802BB1";
        }else {
            document.getElementById(hitID).style.color = "#d1d7e0";    
        }
        intToHit =  attackRoll + 11;
        intDmg = ((Math.floor(Math.random() * 12) + 1) + (Math.floor(Math.random() * 12) + 1) + (Math.floor(Math.random() * 12) + 1) + (Math.floor(Math.random() * 12) + 1))*crit;
        toHit = attackType + " - Hit Value: " + intToHit;
        dmg = "Damage: " + intDmg + " hp";
        document.getElementById(hitID).textContent = toHit;
        document.getElementById(dmgID).textContent = dmg;
        crit = 1;
    }
}


//EXECUTE SELECTED ATTACK


function executeAttack() {
    clearData();
    switch(selectedAttack){
        case "pactBlade":
            basicAttack();
            break;
        case "eldBlast":
            eldritchBlast();
            break;
        case "hellishRebuke":
            hellishRebuke();
            break;
        case "vampiricTouch":
            vampiricTouch();
            break;
        case "eldritchSmite":
            eldritchSmite();
            break;
        case "banishingSmite":
            banishingSmite();
            break;
        case "coneOfCold":
            coneOfCold();
            break;
        case "crownOfStars":
            crownOfStars();
            break;
        case "shapechange":
            marilithAttack();
            break;
        default:
            document.getElementById("attackHeader").textContent = "No Attack Selected!";
        }
}


//CLEAR DATA


function clearData() {
    document.querySelectorAll("p.hitText").forEach(element => {
        element.textContent = " ";
    });
    document.querySelectorAll("p.hitDmg").forEach(element => {
        element.textContent = " ";
    });
}


//BUTTON DEFINITION


document.querySelectorAll(".attack-button").forEach(button => {
    button.addEventListener("click", () => selectAttack(button.id));
});

document.getElementById("btnAttack").addEventListener("click", executeAttack);