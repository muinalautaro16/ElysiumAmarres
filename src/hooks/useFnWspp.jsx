import {useState, useEffect} from 'react'

const useFnWspp = ( links = [] ) => {
    const [link, setlink] = useState(null);

    useEffect(() => {
        getRandomItem()
    }, []);

    function getRandomItem() {
        // get random index value
        const randomIndex = Math.floor(Math.random() * links.length);
        console.log(randomIndex)
        // get random item
        const item = links[randomIndex];

        setlink(item);
        // return item;
    }   
    return {link, getRandomItem}
};

export default useFnWspp