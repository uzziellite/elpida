<script>
export let data;
</script>

{#if data["_embedded"]["replies"]}
	<div class="postbox__comment mb-50">
		<h3 class="postbox__comment-title">Comment(s)</h3>
		<ul>
			{#each data["_embedded"]["replies"][0] as replies}
			  <li>
			     <div class="postbox__comment-box p-relative">
			        <div class="postbox__comment-info d-flex align-items-center">
			              <div class="postbox__comment-avater mr-40">
			                 <img src={replies["author_avatar_urls"]["96"]} alt={replies["author_name"]}>
			              </div>
			              <div class="postbox__comment-name p-relative">
			                 <h5>
			                 	{replies["author_name"]}
			                 </h5>
			                 <div class="postbox__comment-text">
			                    <div contenteditable bind:innerHTML={replies["content"]["rendered"]}></div>
			                    <!--<div class="postbox__comment-reply">
			                       <a href="#"><i class="flaticon-right-arrow-1"></i>Reply</a>
			                    </div>-->
			                 </div>
			              </div>
			        </div>
			     </div>
			  </li>
			{/each}
		</ul>
	</div>
{/if}
