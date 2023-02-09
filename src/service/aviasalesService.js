export default class AviasalesService {
  static #baseURL = 'https://aviasales-test-api.kata.academy/';

  static getSearchId = async function () {
    const response = await fetch(`${this.#baseURL}search`);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  };

  static getTickets = async function (searchId) {
    const response = await fetch(
      `${this.#baseURL}tickets?searchId=${searchId}`
    );
    if (!response.ok) throw new Error();
    return await response.json();
  };
}
