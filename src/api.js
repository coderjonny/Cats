
const getCats = async (page) => {
    try {
        let response = await fetch(
            `https://catfact.ninja/breeds?limit=25&page=${page}`
        );
        let json = await response.json();
        console.log('------------get cats json:' , json)
        return json;
    } catch (error) {
        console.error(error);
    }
};

export const getCatFact = async () => {
    try {
        let response = await fetch(
            'https://catfact.ninja/fact?max_length=140'
        );
        let json = await response.json();
        console.log('getCatfact called ---!!   !  ', json)
        return json.fact;
    } catch (error) {
        console.error(error);
    }
};

export default getCats;