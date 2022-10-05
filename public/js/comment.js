const addComment = async () => {
    
    try {
        const commentTextEl = document.querySelector("#comment");
        const content = commentTextEl.value.trim();
        const post_id = window.location.href.split("/").pop();


        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({content, post_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post a comment.');
        }
    } catch (err) {
        console.log("post err = " + err);
        res.status(500).json(err);
    }
};

document
    .querySelector('#comment-submit')
    .addEventListener('click', addComment);