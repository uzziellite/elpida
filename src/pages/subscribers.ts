export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    
    let reply;
    let error;
    const body = await request.json();
    const username = body.email;
    const email = body.email;

    //Subscriber Data
    const data = {
      "username": username,
      "email": email,
      "password": "12HJyur^&54ghd*&^"
    };

    //Prepare basic Authentication
    const basicAuthHeader = 'Basic ' + btoa(`${import.meta.env.SECRET_COMMENTS_USERNAME}:${import.meta.env.SECRET_COMMENTS_PASSWORD}`);

    await fetch(`${import.meta.env.PUBLIC_CMS}wp-json/wp/v2/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': basicAuthHeader
      },
      body: JSON.stringify(data) // Convert the data to JSON format
    })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        reply =  data;
      })
      .catch(err => {
        error =  err;
      });

    return new Response(JSON.stringify({
      response: reply,
      message: "Attempted to create subscriber",
      error: error
    }), {
      status: 200
    })
  }

  return new Response(null, { status: 400 });
}