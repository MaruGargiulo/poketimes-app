const initState = {
    posts: [
        { id: '1', title: 'Post 1', content: 'Some text' },
        { id: '2', title: 'Post 2', content: 'Some text' },
        { id: '3', title: 'Post 3', content: 'Some text' },
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            return ({
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            })
        default:
            return state
    }
}

export default rootReducer