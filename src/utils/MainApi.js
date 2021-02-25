class MainApi {
  constructor(baseUrl = 'http://localhost:3000') {
    this.baseUrl = baseUrl;
  }

  _getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
  }

  async _getResponseData(response) {
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.status);
    }
  }

  async signup(email, password, name) {
    const response = await fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await this._getResponseData(response);
  }

  async signin(email, password) {
    const response = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await this._getResponseData(response);
  }

  async getInfo() {
    const response = await fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this._getAuthorizationHeader(),
    });

    return await this._getResponseData(response);
  }

  async saveArticle(data) {
    const response = await fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      body: JSON.stringify({
        ...data
      }),
      headers: {
        ...this._getAuthorizationHeader(),
        'Content-Type': 'application/json'
      }
    });

    return await this._getResponseData(response);
  }

  async getArticles(data) {
    const response = await fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: this._getAuthorizationHeader()
    })

    return await this._getResponseData(response);
  }

  async deleteArticle(id) {
    const response = await fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: this._getAuthorizationHeader()
    })

    return await this._getResponseData(response);
  }
}

export default MainApi;
