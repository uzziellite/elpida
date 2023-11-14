<script>
	export let id;
	let name;
	let email;
	let comment;
	let error = false;
	let response;
	

	const submitComment = () => {
		
		const data = {
		  name: name,
		  email: email,
		  comment: comment,
		  id: id
		};

		fetch('/comments', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json', // Specify the content type as JSON
		  },
		  body: JSON.stringify(data) // Convert the data to JSON format
		})
		  .then(response => response.json()) // Parse the response as JSON
		  .then(data => {
		    window.location.reload()
		  })
		  .catch(error => {
		  	error = true;
		    console.error('Error:', error);
		  });
	}
</script>

<div class="postbox__comment-form-box">
  <h3 class="postbox__comment-form-title">Write a comment</h3>
  <div class="postbox__comment-form">
     <form on:submit|preventDefault={submitComment}>
     		<input type="hidden" name="id" bind:value={id}>
        <div class="row">
           <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="postbox__comment-input">
                 <input name="name" type="text" placeholder="your name" bind:value={name} required>
              </div>
           </div>
           <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="postbox__comment-input">
                 <input name="email" type="email" placeholder="your mail" bind:value={email} required>
              </div>
           </div>
           <div class="col-xxl-12">
              <div class="postbox__comment-input">
                 <textarea name="comment" placeholder="Write Your Comment" bind:value={comment} required></textarea>
              </div>
           </div>
           <div class="col-xxl-12">
              <div class="postbox__comment-btn">
                 <button type="submit" class="tp-btn">Submit Your Comment</button>
              </div>
           </div>
        </div>
        {#if error}
        	<p class="text-danger">Unable to post comment at the moment</p>
        {/if}
        {#if response}
        	<p class="text-success">{response}</p>
        {/if}
     </form>
  </div>
</div>
