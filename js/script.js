$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

    $("#button").click(function(){
        var input = $(".input").val();
        pigWord(input);
    });

    $("#clearTranslation").click(function(){
        $("#engOutput").empty();
        $("#latOutput").empty();
    });
    
    function pigWord(pig){
        let vowels = ["a" , "e" , "i" , "o" , "u"];
        let firstLetter = pig[0];

        //word starts with a vowel
        for(const vowel of vowels){
            if (firstLetter === vowel){
                let latOutcome = $("<p></p>").text(pig + "yay");
                $("#latOutput").append(latOutcome);
                engAppend(pig);
                return;
            }
        };

        //word starts with a consonant or consonant cluster
        let consoClus = consonantCluster(pig);
        firstLetter = pig.substring(0, consoClus);
        let newWord = pig.substring(consoClus);

        let latOutcome = $("<p></p>").text(newWord + firstLetter + "ay");
        $("#latOutput").append(latOutcome);
        engAppend(pig);
    };
    
    function consonantCluster(pig){
        let consonantCount = 0;
        let vowels = ["a" , "e" , "i" , "o" , "u"];

        for(const letter of pig){
            for(const vowel of vowels){
                if(letter === vowel){
                    return consonantCount;
                }
                if(letter === 'y' && consonantCount > 0){
                    return consonantCount;
                }
            }
            consonantCount++;
        };
        return consonantCount;
    };
    
    function engAppend(pig){
        let engOutcome = $("<p></p>").text(pig);
        $("#engOutput").append(engOutcome);
    }

});
