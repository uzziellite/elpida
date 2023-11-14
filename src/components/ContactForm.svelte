<script>
	let name;
	let email;
	let subject;
	let message;
	let error;
	let response;
	let sending = false;

	const submitForm = () => {
		sending = true;
		const msg = {
			name:name,
			email:email,
			subject:subject,
			message:message
		}

		fetch('/message', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json', // Specify the content type as JSON
		  },
		  body: JSON.stringify(msg) // Convert the data to JSON format
		})
		  .then(reply => reply.json()) // Parse the response as JSON
		  .then(data => {
		    response = "Message sent successfully";
		    name = null;
		    email = null;
		    subject = null;
		    message = null;
		    sending = false;
		  })
		  .catch(error => {
		  	error = "Unable to send message at the moment";
		    console.error('Error:', error);
		    sending = false;
		  });
	}
</script>

<form on:submit|preventDefault={submitForm}>
  <div class="row">
      <div class="col-xl-6 mb-30">
          <div class="tp-contact-form__input-box">
              <input type="text" placeholder="Your Name" bind:value={name} name="name" required>
          </div>
      </div>
      <div class="col-xl-6 mb-30">
          <div class="tp-contact-form__input-box">
              <input type="email" placeholder="Your Email" bind:value={email} name="email" required>
          </div>
      </div>
      <div class="col-xl-12 mb-30">
          <div class="tp-contact-form__input-box">
              <input type="text" placeholder="Subject" bind:value={subject} name="subject" required>
          </div>
      </div>
      <div class="col-xl-12 mb-30">
          <div class="tp-contact-form__textarea-box">
              <textarea placeholder="Write Your Message" bind:value={message} name="subject" required></textarea>
          </div>
      </div>
  </div>
  
  {#if sending}                                
	  <div class="tp-contact-form__button">
	      <button class="tp-btn">Sending ...</button>
	  </div>
  {:else}
  	<div class="tp-contact-form__button">
	      <button class="tp-btn">Send your message</button>
	  </div>
  {/if}

  {#if typeof response == 'string'}
  	<p class="text-success">
  		{response}
  	</p>
  {/if}

  {#if typeof error == 'string'}
  	<p class="text-danger">
  		{error}
  	</p>
  {/if}
</form>
