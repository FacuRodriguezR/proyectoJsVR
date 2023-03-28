$(document).ready(function(){

	// Slider
	
	  
	  $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });

	  //Posts

	  var posts = [
		{
			title: 'Pueba de Titulo 1',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi natus blanditiis officiis voluptatum molestias velit, iusto aut quas voluptatem. Nostrum quas aspernatur, praesentium corrupti sapiente est consequuntur, quo perferendis animi nesciunt vel. Laboriosam quisquam, ab qui ducimus error quibusdam'
		},
		{
			title: 'Pueba de Titulo 2',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi natus blanditiis officiis voluptatum molestias velit, iusto aut quas voluptatem. Nostrum quas aspernatur, praesentium corrupti sapiente est consequuntur, quo perferendis animi nesciunt vel. Laboriosam quisquam, ab qui ducimus error quibusdam'
		},
		{
			title: 'Pueba de Titulo 3',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi natus blanditiis officiis voluptatum molestias velit, iusto aut quas voluptatem. Nostrum quas aspernatur, praesentium corrupti sapiente est consequuntur, quo perferendis animi nesciunt vel. Laboriosam quisquam, ab qui ducimus error quibusdam'
		},
		{
			title: 'Pueba de Titulo 4',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi natus blanditiis officiis voluptatum molestias velit, iusto aut quas voluptatem. Nostrum quas aspernatur, praesentium corrupti sapiente est consequuntur, quo perferendis animi nesciunt vel. Laboriosam quisquam, ab qui ducimus error quibusdam'
		},
		{
			title: 'Pueba de Titulo 5',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi natus blanditiis officiis voluptatum molestias velit, iusto aut quas voluptatem. Nostrum quas aspernatur, praesentium corrupti sapiente est consequuntur, quo perferendis animi nesciunt vel. Laboriosam quisquam, ab qui ducimus error quibusdam'
		}
		
	  ]

	  posts.forEach((item, index) => {
		var post = `
		<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}.</p>
                    <a href="#" class="buttonMore">Leer más</a>
                </article>

		`;
		$("#posts").append(post);

	  });
	 

	  //selector de tema

	  var theme = $("#theme")
	  $("#to-green").click(function(){
		theme.attr("href", "css/green.css")
	  })
	  $("#to-red").click(function(){
		theme.attr("href", "css/red.css")
	  })
	  $("#to-blue").click(function(){
		theme.attr("href", "css/blue.css")
	  })


	  //Scroll

	  $(".subir").click(function(e){
		e.preventDefault();
		

		$("html, body").animate({
			scrollTop: 0
		}, 500);

		return false;
	  })
	});


	