import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {

    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     const id = this.props.match.params.post_id 

    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res => {
    //             this.setState({ post: res.data })
    //             console.log(this.state.post);

    //         })
    // }

    handleDelete = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                {
                    this.props.post
                        ?
                        <div className="post">
                            <h4 className="center">{this.props.post.title}</h4>
                            <p>{this.props.post.content}</p>
                            <div className="center">
                                <button className="btn grey" onClick={this.handleDelete}>Delete Post</button>
                            </div>
                        </div>
                        :
                        <div className="center">Loading...</div>
                }
            </div>
        )
    }

}

// ownProps = las props de este componente ANTES de agregarle las props del store de redux
// esas props tienen el id de la ruta. Lo podemos usar para buscar el id
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts.find(post => post.id === ownProps.match.params.post_id)
    }
}


// qué propiedades queremos mapear a las props de este componente
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}


// store.dispatch({ type: --- })

export default connect(mapStateToProps, mapDispatchToProps)(Post)