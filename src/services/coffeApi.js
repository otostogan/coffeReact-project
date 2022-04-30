import {useHttp} from '../hooks/http.hook';
import { createApi } from 'unsplash-js';



const CoffeService = () => {

    const _baseUrl = "https://api.sampleapis.com/coffee/";

    const {loading, request, error, clearError} = useHttp();

    const getImg = async (page, perPage) =>{
        const unsplash = createApi({
            accessKey: 'L8kh1rj5Pxc9xPGKS0V9Y3XxB65A4wtfwzXmGdpunes',
            headers: { 'X-Custom-Header': 'foo' },
        });
        let res = await unsplash.search.getPhotos({
            query: 'coffe',
            page: page,
            perPage: perPage
        }).then(res => {
          
            if(res.type === 'success'){
                return res.response.results.map(_transformImg);    
                             
            }
        })
        return res;
    }
    const getAllCoffe = async (type, number) => {
        const res = await request(`${_baseUrl}/${type}`);
        return res.filter((item, i)=> i < number);
    }
    const getCoffe = async (type, id) => {
        const res = await request(`${_baseUrl}/${type}/${id}`);
        const infoImg = await getImg(id, id);

        res.urls = infoImg[0].urls;

        return res;
    }
    const wholeItems = async ({type, number, page}) =>{
        const infoCoffe = await getAllCoffe(type, number);
        const infoImg = await getImg(page, number);

        let newArr = [];

        infoCoffe.forEach((item, i) => {
            newArr.push({
                title: item.title,
                description: item.description,
                ingredients: item.ingredients,
                alt: infoImg[i].title,
                urls: infoImg[i].urls,
                id: infoCoffe[i].id
            })
        })
    
        return newArr;
    }
    const _transformCoffe = (coffe) => {
        return {
            title: coffe.title,
            description: coffe.description,
            ingredients: coffe.ingredients,
            id: coffe.id,
            price: Math.random * (5 - 1) -1,
        }
    }
    const _transformImg = (img) => {
        return {
            title: img.alt_description,
            id: img.id,
            urls: img.urls
        }
    }

    return {loading, error,  clearError, getImg, getAllCoffe, getCoffe, wholeItems}

}

export default CoffeService;