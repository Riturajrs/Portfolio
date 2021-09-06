// const text = document.querySelector("#name");
// const strText = text.textContent;
// const splitText = strText.split(' ');
// text.textContent = "";
// for( let i = 0 ; i < splitText.length ; i++ ){
//     text.innerHTML += "<span>" +splitText[i] + "</span>";
// }
// let char = 0;
// let timer = setInterval(onTick, 200 );

// function onTick(){
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if( char == splitText.length ){
//         end();
//         return;
//     }
// }

// function end(){
//     clearInterval(timer);
//     timer = null;
// }
class WriteSkills{
    constructor(texts,heading,words){
      this.head= '';
      this.heading = heading;
      this.texts = texts;
      this.words = words;
      this.wait = parseInt(1500);
      this.WriteHeading();
      this.txt = '';
      this.deleting = false;
      this.index = 0;
      setTimeout( () => this.type(), 1200);
    }
    WriteHeading(){
      if( this.head.length === this.heading.length ){
        return;
      }
      this.head = this.heading.substring(0,this.head.length+1);
      this.texts.innerHTML = this.head;
      setTimeout(() => this.WriteHeading(), 100);
    }
    type(){
      const current = this.index%this.words.length;
      const fullTxt = this.words[current];
      if( this.deleting ){
        this.txt = fullTxt.substring(0, this.txt.length-1);
      }
      else{
        this.txt = fullTxt.substring(0, this.txt.length+1);
      }
      this.texts.innerHTML = this.head+this.txt+'|';
      let typespeed = 200;
      typespeed /= 2;
      if(!this.deleting && this.txt === fullTxt ) {
        typespeed = this.wait;
        this.deleting = true;
      } else if(this.deleting && this.txt === '' ) {
        this.deleting = false;
        this.index++;
        typespeed = 200;
      }
      setTimeout(() => this.type(), typespeed);
    }
  }
  class write{
    constructor(text,content){
      this.name= '';
      this.content = content;
      this.text = text;
      this.WriteName();
      const texts = document.querySelector('#texts');
      const heading = texts.getAttribute('content');
      const words = JSON.parse(texts.getAttribute('skills'));
      setTimeout( () => new WriteSkills(texts,heading,words), (2800) );
    }
    WriteName(){
      if( this.name.length === this.content.length ){
        return;
      }
      this.name = this.content.substring(0,this.name.length+1);
      this.text.innerHTML = this.name;
      setTimeout(() => this.WriteName(), 100);
    }
  }
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    const text = document.querySelector('#name');
    const content = text.getAttribute('content');
    new write(text,content);
  }
  