// comment
/* multiline 
comment */
$.ajax ({
	url: '/posts', 
	success: success
	}

	)

function createPost(data){
     var p = document.createElement('p');
     for (var key in data){
     p.innerText = data.key;
     //var Container = document.getElementById('main');
     //Container.appendChild(p);
     //document.body.appendChild(p);
     //document.getElementById('main').innerHTML += p;

     }
     return p;
     //p.textContent dziala w fireox
     }


function success (data){
      for (i=0; i<data.length; i++){
        var post = data[i];
        var postElem = createPost(post);
        document.body.appendChild(postElem);
      }
      console.log (data);

  }
//ajax to moj obiekt, dostaje sie do posts, i co moge z nimi zrobic? wyswietlic! np.
