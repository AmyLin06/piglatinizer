$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

  $("#button").click(function(){
      var input = $(".input").val();
      pigWord(input);
  });

function pigWord(pig){
    let vowel = ["a" , "e" , "i" , "o" , "u"];
    let firstLetter = pig[0];
    let newword = pig.substring(0);
    vowel.forEach(function(vowels){
        if (firstLetter === vowels){
            $(".output").html(newword + pig[0] + "ay")
        }
        else{
            $(".output").html(pig + "ay")
        }
    });
};




});
