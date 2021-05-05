
const getCats = async () => {
    try {
        let response = await fetch(
            'https://catfact.ninja/breeds?limit=25'
        );
        let json = await response.json();
        console.log('data:' , json.data)
        return json.data;
    } catch (error) {
        console.error(error);
    }
};

export default getCats;