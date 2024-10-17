const expform=document.getElementById('expenseform');
const explist=document.getElementById('expenselist');
expform.addEventListener('submit',
    function (event){
        event.preventDefault();
        const desc=document.getElementById('description').value;
        const cat=document.getElementById('category').value;
        const amt=document.getElementById('amount').value;
        
        if(desc && cat && !isNaN(amt)){
            const newrow=document.createElement('tr');
            newrow.innerHTML=`<td> ${desc} </td>
            <td>${cat}</td>
            <td>${amt}</td>`;
            explist.appendChild(newrow);
            document.getElementById('description').value='';
            document.getElementById('category').value='';
            document.getElementById('amount').value='';



        }else{
            alert("Please fill out all the fields with valid data!!")
        }
    }
    
)