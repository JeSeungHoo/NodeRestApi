// Http Status 명확히 표시할 것

export function getPosts (req, res, next) {
    res.status(200).json({
        posts: [{
            title: 'First Post',
            content: 'This is the first post!'
        }]
    });
}

export function createPost (req, res, next) {
    const { title, content } = req.body;
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toString,
            title,
            content
        }
    });
}