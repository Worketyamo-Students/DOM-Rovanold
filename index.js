let body = document.body

// Question 1:

//1.1

// let ul = document.getElementById('ul')
// let li = document.querySelectorAll(".li")
// for(let i=0; i< li.length; i++){
    
//     li[i].innerText = i

//     I-4

//     if(i%2 == 0){
//         ul.removeChild(li[i])
//     }
// }

//1.2

// for(let i=0; i<=9; i++){
//     let p = document.createElement('p')
//     ul.appendChild(p)
//     p.innerText = 'Paragraph' + i
// }

//1.3

// let td = document.querySelectorAll('td')
// for(let i=0; i<td.length; i++){
//     td[i].style.width = "100px"; td[i].style.height = "50px"; td[i].style.textAlign = 'center'
//     td[i].style.background =  '#'+(Math.random()*0xFFFFFF<<0).toString(16)
// }

//1.5

// const tab = ["Pomme", "Banane", "Orange"]
// let ul = document.createElement('ul')
// body.appendChild(ul)
// for(let i = 0; i<tab.length ; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = tab[i]
// }

//Question 2:


// 2.1

// for(let i=0; i<5; i++){
//     let div = document.createElement('div')
//     body.appendChild(div)
//     let p = document.createElement('p')
//     div.appendChild(p)
//     p.innerText = 'Enfant ajouté'
// }


// 2.2

// let ul = document.getElementById('ul')
// let li = document.querySelectorAll(".li")
// for(i=0; i<li.length; i++){
//     ul1.removeChild(li[i])
// }


// 2.3

// let section = document.createElement('section')
// body.appendChild(section)
// let div1 = document.createElement('div')
// section.appendChild(div1)
// let div2 = document.createElement('div')
// div1.appendChild(div2)
// let span = document.createElement('span')
// div2.appendChild(span)
// let parentSpan = span.parentElement
// console.log(parentSpan)
// while(parentSpan !== body ){
//     parentSpan = parentSpan.parentElement
//     console.log(parentSpan)
// }


// 2.4

// const section2 = document.createElement('section'); section2.id = 'section2'
// div2.replaceWith(section2)
// console.log(section)


//2.5

// let div = document.createElement('div'); body.appendChild(div)
// let ul = document.createElement('ul'); div.appendChild(ul)
// for(i=onabort; i<4; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
// }


//Question 3:


//3.1

// let ulist = document.getElementById('ulist')
// let li2 = document.getElementById('li2')
// let jnrbr = li2.previousElementSibling
// let snrbr = li2.nextElementSibling
// jnrbr.style.background = 'blue'
// snrbr.style.background = 'red'


//3.2

// let li3 = document.getElementById('li3')
// let first = li3.parentElement.firstElementChild
// let last = li3.parentElement.lastElementChild
// console.log(first, last)


//3.3

// let ulist = document.getElementById('ulist')
// let li2 = document.getElementById('li2')
// let next = li2.nextElementSibling
// li2.before(next)
// console.log(ulist)


//3.4

// let ulist = document.getElementById('ulist')
// let p1 = document.getElementById('p1')
// let next = p1.nextElementSibling
// ulist.removeChild(next)


//3.5

// let ulist = document.getElementById('ulist')
// let p1 = document.getElementById('p1')
// let p1copy = p1.cloneNode(true)
// console.log(p1copy)
// p1.after(p1copy)


//Question 4:


//4.1

// const tab = [['name', 'age'], ['Kalash', 25], ['Patricia', 30]]

// let table = document.createElement('table')
// body.appendChild(table)
// for(let i=0; i<=2; i++){
//     let tr = document.createElement('tr'); table.appendChild(tr)
//     if(i==0){
//         let th1 = document.createElement('th'); tr.appendChild(th1)
//         th1.innerText = tab[i][0]
//         let th2 = document.createElement('th'); tr.appendChild(th2) 
//         th2.innerText = tab[i][1]
//     } else{
//         let td1 = document.createElement('td'); tr.appendChild(td1)
//         td1.innerText = tab[i][0]
//         let td2 = document.createElement('td'); tr.appendChild(td2) 
//         td2.innerText = tab[i][1]
//     }
// }


//4.2

// let tr = document.createElement('tr'); table.appendChild(tr)
// tr.innerHTML = '<td>Ken</td> <td>28</td>'


//4.3


// const abc = ['A', 'B', 'C']
// let ul = document.createElement('ul'); body.appendChild(ul)
// for(let i=0; i < abc.length; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = abc[i]

//     if(i==1){
//         li.style.fontWeight = 'bold'
//     }
// }


//4.4

// const tab1 = ['red', 'orange']
// const tab2 = ['yellow', 'blue']
// const tab3 = [].concat(tab1, tab2)
// let ul = document.createElement('ul'); body.appendChild(ul)
// for(let i=0; i < tab3.length; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = tab3[i]
// }  

//4.5

// const Tab = [
//     {
//         nom: 'Kalash,
//         age : 25
//     },
//     {
//         nom: 'Patricia',
//         age: 30
//     }
// ]
// let ul = document.createElement('ul'); body.appendChild(ul)
// for(let i=0; i < Tab.length; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = Tab[i].nom + ' (' + Tab[i].age + 'ans)' 
// }
