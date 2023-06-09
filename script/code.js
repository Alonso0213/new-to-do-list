
let sorting = document.querySelector('#arrange');
let addBtn = document.querySelector('#display');
let output=document.querySelector('#show');
let removeBtn= document.querySelector('#del')
let intxt= document.querySelector('#input').value
let list=[]

addBtn.addEventListener('click', (e)=>
{

    
    output.innerHTML+=` <ul>
    <input type='checkbox'>
    ${intxt}
    <button>Edit</button>
    <button type="button" id="del">remove</button>
    </ul>
    `
})

function del() {
    removeBtn.addEventListener('click',
    )
    

}


   



































