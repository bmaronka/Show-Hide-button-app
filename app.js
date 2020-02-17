class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false,
        }
        this.handleMessageButton = this.handleMessageButton.bind(this);
    }

    handleMessageButton() {
        this.setState((prevState) => ({
            messageIsActive: !prevState.messageIsActive,
        }));
    }

    render() {
        const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae corporis aut fugiat voluptatum, similique, quo molestias, obcaecati eaque accusantium quia omnis tempora quasi atque? Quas cupiditate sunt eos optio!';

        return (
            <>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Hide' : 'Show'}</button>
                {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
                {this.state.messageIsActive && <p>{text}</p>}
            </>
        )
    }
}

ReactDOM.render(<Message />, document.getElementById('root'));