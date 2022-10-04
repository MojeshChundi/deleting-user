

  var form=document.getElementById('form');

  var ul=document.getElementById('oi')
  var li=document.getElementById('list')

  document.getElementById('btn1').addEventListener("click",showOutput)
  
  
  function showOutput(data){
  
      let li =document.createElement('li')
      li.id="list"
      let r=li.appendChild(document.createTextNode(data.name+"-"+data.email+"-"+data.pwd+"--"))
       let a=ul.appendChild(li)
       //ul.appendChild(li)
       a.style.textAlign='center'
      a.style.fontSize='50px'
      a.style.fontFamily ='fantasy'
      a.style.color='green'

      let btn=document.createElement('button');
      btn.id='btn2';
      btn.appendChild(document.createTextNode('delete'))
      li.appendChild(btn)
      
      let btnE=document.createElement('button');
      btnE.id='btn3';
      btnE.appendChild(document.createTextNode('edit'))
      li.appendChild(btnE)
     
  }
  
  document.getElementById('btn1').addEventListener("click",networkCall)
  
  function networkCall(){
    
  
    let obj={
       name:document.getElementById('in1').value,
       email:document.getElementById('in2').value,
       pwd:document.getElementById('in3').value
    }
    axios
      .post('https://crudcrud.com/api/8f86f8fe212d465b99c5ed9919392a37/Status',obj)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err));
  
  }


  document.getElementById('btn2').addEventListener("click",deletepost)
  
  function deletepost(){
    
    axios
    .delete('https://crudcrud.com/api/8f86f8fe212d465b99c5ed9919392a37/Status/633bd83206e25f03e8c5e4a6')
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err));
  
  }




  
  
  window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/8f86f8fe212d465b99c5ed9919392a37/Status')
    .then(response=>{
      for(let i=0; i<response.data.length;i++){
       showOutput(response.data[i])
      }
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  })
  


  


