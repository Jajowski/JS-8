// 2 
fetch('https://reqres.in/api/users?page=2', {method: 'GET'})
.then(function(mosuliinfo) {return mosuliinfo.json();})
.then(function(response){console.log(response);
    let ulitem=document.createElement('ul');
    response.data.forEach(element => {
       let li=document.createElement('li');
    li.textContent=response.data.email + ' ' + response.data.last_name
    ulitem.appendChild(li);  
    });
    

document.getElementById('api-server').appendChild(ulitem);})

.catch(function(errorresponse) {
    console.log(errorresponse);})

// fetch('https://reqres.in/api/users?page=2', {method: 'GET'})
// .then(function(mosuliinfo) {return mosuliinfo.json();})
// .then(function(response){console.log(response);
//     let ulitem=document.createElement('ul');
//     response.data.foreach((element) =>{
//         let li=document.createElement('li');
//         let p=document.createElement('p');
//         p.textContent= '${element.email}'

//         li.appendchild(p);
//         ulitem.appendChild(li); });
//         document.getElementById('api-server').appendChild(ulitem);})

//         .catch(function(errorresponse){console.log(errorresponse);});


// 1



  fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
  .then (function(mosuliinfo) {return mosuliinfo.JSON();})
.then (function (response) { console.log(response);
    let mainPostWraper = document.getElementById('post-block');
  let divWraper = document.createElement('div');
  let h2Tag = document.createElement('h2');
  h2Tag.innerText = `${response.id}`;

  let h3Tag = document.createElement('h3');
  h3Tag.innerText = `${response.title}`;

  divWraper.appendChild(h2Tag);
  divWraper.appendChild(h3Tag);

  mainPostWraper.appendChild(divWraper);
  console.log(divWraper);}


.catch(function(errorresponse){console.log(errorresponse);}))