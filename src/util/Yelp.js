const apiKey = 'qb7O58oLjTj3dZie8pyX32TmCzu4Zyb3p_i6O_0mIfrJfdgr8z_J6jNR4Ob3AcwO_pYavClEWJe3GfIvNQMImDYgVQagkvSUOZhqgJXUSiXyGh8ooH-vDUjVPOnuW3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } 
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1 + business.location.address2 + business.location.address3,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url
                    }
                });
            }
        })
    }
}

export default Yelp;