export default class AviasalesService {
  static #baseURL = 'https://aviasales-test-api.kata.academy/';

  static searchIdRequest = async function (payload = {}) {
    const response = await fetch(`${this.#baseURL}search`);
    if (!response.ok) {
      console.log(`...searchIdRequest error`)
      throw new Error();
    }
    return await response.json();
  };

  static getTicketsList = async function (searchId, payload = {}) {
    let response = await fetch(`${this.#baseURL}tickets?searchId=${searchId}`);
    if (!response.ok) {
      try {
        response = await fetch(`${this.#baseURL}tickets?searchId=${searchId}`);
      } catch {
        console.log(`...getTicketsList error`)
      }
    }
    return await response.json();
  };
}