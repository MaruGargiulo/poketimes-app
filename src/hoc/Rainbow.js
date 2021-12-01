import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'purple', 'yellow']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    return (props) => {
        return (
            <div className={`${randomColor}-text`}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default Rainbow