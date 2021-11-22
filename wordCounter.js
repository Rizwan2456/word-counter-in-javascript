var char= document.getElementById('char');
var words= document.getElementById('word');

var text= document.getElementById('textarea');

text.addEventListener('input', counter);
var charaterLength;

function counter(){
//for characters counter
charaterLength=this.value;
char.innerHTML=charaterLength.length;
//for words counter
charaterLength.trim();
//split where space found
var word=charaterLength.split(" ");
//removing extra space between words
var newWords=word.filter(function(element){
    if(element!="")
    return element;
});
words.innerHTML=newWords.length;
}