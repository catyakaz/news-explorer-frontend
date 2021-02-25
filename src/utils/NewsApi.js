import DateUtil from './DateUtil';

class NewsApi {
  constructor() {
    this.apiKey = 'a41ec8562a4343f79688c9c6983068da';
    this.from = DateUtil.getPastDate(7);
    this.to = DateUtil.digitFormatDate();
    this.pageSize = 100;
    this.baseUrl = 'https://nomoreparties.co/news/v2/everything';
  }

  async search(query) {
    return await fetch(`${this.baseUrl}?apiKey=${this.apiKey}&from=${this.from}
      &to=${this.to}&pageSize=${this.pageSize}&q=${query}`).then((response) =>
      response.json(),
    );
  }
}

export default NewsApi;
