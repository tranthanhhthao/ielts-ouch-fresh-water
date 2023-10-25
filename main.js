import essays from './essays.js'

const titleBox = document.getElementById('essay');
const essay = document.getElementById('essay-content')

console.log(essays.length)
console.log(essays[7].title)

const theEssay = essays[7];


titleBox.appendChild(document.createElement('h3')).innerHTML = theEssay.title;
titleBox.appendChild(document.createElement('p')).innerHTML = theEssay.prompt;
titleBox.appendChild(document.createElement('p')).innerHTML = theEssay.question;

console.log(theEssay.essay.length)

for (let i = 0; i < theEssay.essay.length; i++) {
    essay.appendChild(document.createElement('p')).innerHTML = theEssay.essay[i]
}




