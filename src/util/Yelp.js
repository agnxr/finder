const apiKey = 'TovHecvqzoEV_J6XhHA3k6wqTwjomgM7KOkmUtBfQYoC8p7wvJzw6m7R5Y4y_whx7mhWtLB3I9dgAlJ6N0JYlQ8sNztM-wggSEGEq8PZW3WFMShydML8CJI2xaTMXHYx';

const yelp = {

    searchYelp(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { headers: {
                Authorization: `Bearer ${apiKey}`

                }
            }
        ).then(response => { 
            return response.json() ;
        }).then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(((business => {
                    console.log(business);
                    return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    }
                })));
            }
        })
    }

};

export default yelp;