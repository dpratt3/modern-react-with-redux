import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID bU1TkeE3H23UDKbGswfd4KnE5QjhGzsGkaeW4ok0TpU",
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;