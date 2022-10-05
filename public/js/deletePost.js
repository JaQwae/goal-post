async function deletePost(event) {
    event.preventDefault();

    try {
        const title = document.querySelector("#edit-post-title").value.trim();
        const content = document.querySelector('#edit-post-content').value.trim();


        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];

        const response = await fetch(`/api/post/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // if (response.ok) {
            document.location.replace('/mypost');
        // } else {
        //     alert('Failed to delete a post');
        // }
    } catch (err) {
        console.log("post err = " + err);
        res.status(500).json(err);
    }

};

document
    .querySelector('#post-delete')
    .addEventListener('click', deletePost)