import React from "react";

class CartIcon extends React.Component {
    constructor(props) {
        super(props);
        this.mouseEnter = this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)

        this.state = {
            title: 'text is empty',
            price: 0,
            style: 'bg-cart bg-cart--dark'
        }
    }

    mouseEnter() {
        // this.state.title = 'Mouse is on this target'

        this.setState({title: 'Mouse is on this target', style: 'bg-cart bg-cart--white'},)
    }

    mouseLeave() {
        this.setState({title: 'Mouse leave this target', style: 'bg-cart bg-cart--dark'})
        // this.state.title='Mouse leave this target'
    }

    render() {
        return (
            <div className="icon-wrapper" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <div className={this.state.style}> </div>
            </div>
        )
    }

}

export default CartIcon
