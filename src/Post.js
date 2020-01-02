class Post {
    constructor(props) {
        this.props = props;
        this.container = document.createElement('div');
        this.container.className = 'post';
        this.container.id = `post-${props.id}`;
        this.title = document.createElement('h2');
        this.description = document.createElement('p');
        this.date = document.createElement('span');
    }

    render(){
        this.title.innerHTML = this.props.title;
        this.description.innerHTML = this.props.short_description;

        const date = new Date(this.props.date_update.date);
        
        this.date.innerHTML = date.toLocaleDateString();

        this.container.append(
            this.title,
            this.date,
            this.description
        )

        return this.container;
    }
}

export default Post;