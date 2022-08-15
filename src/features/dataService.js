import axios from "axios";

class dataService {
  async getData(
    filters = {
      country: "",
      year: "",
      month: "",
      day: "",
    }
  ) {
    try {
      const response = await axios.get(
        `https://holidays.abstractapi.com/v1/?api_key=7a77b0e55d6649a99d99ec720c3e549a&country=${filters.country}&year=${filters.year}&month=${filters.month}&day=${filters.day}`
      );
      console.log("Ghana data", response);
      return response;
    } catch (error) {
      console.log("Show error", error);
    }
  }
}

export default new dataService();
