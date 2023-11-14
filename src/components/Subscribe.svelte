<script>
	let email;
	let message;
	let error;

	const createSubscriber = () => {
		
		const data = {
		  email: email
		};

		fetch('/subscribers', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json', // Specify the content type as JSON
		  },
		  body: JSON.stringify(data) // Convert the data to JSON format
		})
		  .then(response => response.json()) // Parse the response as JSON
		  .then(data => {
		    message = "Subscription created successfully";
		  })
		  .catch(error => {
		  	error = "Unable to create subscription";
		    console.error('Error:', error);
		  });
	}
</script>

<form method="POST" action="/subscribers" on:submit|preventDefault={createSubscriber}>
    <input type="email" placeholder="Email Address" name="email" required bind:value={email}>
    <button class="tp-btn-sm theme-2-bg">Subscribe<i class="far fa-long-arrow-right"></i></button>
    {#if typeof message == 'string'}
	    <p class="text-success">{message}</p>
	  {/if}

	  {#if typeof error == 'string'}
	  	<p class="text-warn">{error}</p>
	  {/if}
</form>
