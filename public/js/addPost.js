const addPost = async (event) => {
    event.preventDefault();
    try {
        const title = document.querySelector("#new-post-title").value.trim();
        const content = document.querySelector('#new-post-content').value.trim();
        

        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a post');
        }

    } catch (err) {
        console.log("post err = " + err);
        res.status(500).json(err);
    }
};

document
    .querySelector('#new-post-create')
    .addEventListener('click', addPost);