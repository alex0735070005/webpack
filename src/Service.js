const API_KEY = '6533156864bd641cf09188d9d71eae9a';

class Service {
    constructor(){
        this.apiKey = API_KEY;
        this.url = 'http://blog.api.axenov-it.com/v1/posts';
    }

    getList(limit = 10, page = 1) {
        const query = `${this.url}?limit=${limit}&page=${page}&api_key=${this.apiKey}`;

        return fetch(query, {
            mode: 'cors',
        }).then((response)=>{
            return response.json();
        });
    }
}

export default new Service();