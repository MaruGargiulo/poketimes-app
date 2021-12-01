import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../poke.png'
// es una funcón que invocamos, y devuelve un HOC (higher order component)
import { connect } from 'react-redux'

class Home extends Component {

    // state = {
    //     posts: []
    // }

    // componentDidMount() {
    //     // devuelve una promesa. Esta acción se va a completar en algún momento
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         })
    // }

    render() {

        const { posts } = this.props

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {posts.length === 0
                    ? <div className="center">No posts</div>
                    : posts.map(post => {
                        return (
                            <div className="post card" key={post.id}>
                                <img src={Pokeball} alt="Pokeball" />
                                <div className="card-content">
                                    <Link to={`/${post.id}`}>
                                        <span className="card-title red-text">{post.title}</span>
                                    </Link>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

// agarramos el state y lo mapeamops a las props de este componente
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)