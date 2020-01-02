import Service from './Service';
import Post from './Post';

class ViewManager {
    constructor() {
        this.app = document.querySelector('#app');
        this.container = document.createElement('div');
        this.container.className = 'container';
    }

    init() {
        Service.getList().then(response => {
            
            const list = response.posts.map(props => {
                return new Post(props).render();
            });

            console.log(list);

            this.container.append(...list);

            this.app.appendChild(this.container);
        });
    }
}

export default new ViewManager();
