export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    
    let response;
    let error;
    const body = await request.json();
    const author_name = body.name;
    const author_email = body.email;
    const content = body.comment;
    const post = body.id;

    //Comment Data
    const data = {
      "author_name": author_name,
      "author_email": author_email,
      "post": post,
      "content": content
    };

    //Prepare basic Authentication
    const basicAuthHeader = 'Basic ' + btoa(`${import.meta.env.SECRET_COMMENTS_USERNAME}:${import.meta.env.SECRET_COMMENTS_PASSWORD}`);

    fetch(`${import.meta.env.PUBLIC_CMS}wp-json/wp/v2/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': basicAuthHeader
      },
      body: JSON.stringify(data) // Convert the data to JSON format
    })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        response =  data;
      })
      .catch(err => {
        error =  err;
      });

    return new Response(JSON.stringify({
      message: "Attempted to save comment",
      response: response,
      error: error
    }), {
      status: 200
    })
  }

  return new Response(null, { status: 400 });
}