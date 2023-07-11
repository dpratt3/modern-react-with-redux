import axios from "axios";

const searchImages = async() => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID bU1TkeE3H23UDKbGswfd4KnE5QjhGzsGkaeW4ok0TpU",
        },
        params: {
            query: 'cars',
        },
    });
    console.log(response)
    return response;
};

export default searchImages;