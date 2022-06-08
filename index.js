
function shout(string){  
    return string.toUpperCase();
}
console.log(shout("hello"));

function whisper(string){
    return string.toLowerCase();
}
console.log(whisper("HELLO"));

function logShout(string){
    console.log(string.toUpperCase( ));
}
logShout(hello);

function logWhisper(string){
    console.log(string.toLowerCase( ));
}
logWhisper(HELLO);


function sayHiToHeadphonedRoommate (string){
    //assign string response to a variable name so that later on in the code we can let the function 
    //call the correct response after checking hello, HELLO, and lets have dinner together
    const whisp_response = "I can't hear you!";
    const shout_response = "YES INDEED!";
    const reg_response = "I would love to!";
    if (string.toUpperCase() === string){
        return shout_response;
    }
    else if (string.toLowerCase() === string){
        return whisp_response;
    }
    else if (string === "Let's have dinner together!"){
        return reg_response;
    }
}
console.log(sayHiToHeadphonedRoommate("HELLO"));