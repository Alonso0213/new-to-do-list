let addBtn = document.querySelector('#display');
let list=[""]
let output=document.querySelector('#show')
addBtn.addEventListener('click', (e)=>
{
    let intxt= document.querySelector('#input').value
    output.innerHTML+=` <ul>
    <input type='checkbox'>
    ${intxt}
    <button>Edit</button>
    <button id="remove" type="button">remove</button>
    </ul>
    `
    display()
})
   
    
let sorting = document.querySelector('#arrange');
sorting.addEventListener('click', (e) =>
{
    
}
)

let removeBtn= document.querySelector('#remove')

   removeBtn.addEventListener('click', (e)=>{
    let output=document.querySelector('#show')
    output.value = " "
    

   }
   )
   function display() {
    list.innerHTML =''
    list.forEach((items)=>{
        list.innerHTML+= `
        <ul>
        <input type='checkbox'>
        ${items}
        <button>Edit</button>
        <button id="remove" type="button">remove</button>
        </ul>
        `
    })
    
   }
