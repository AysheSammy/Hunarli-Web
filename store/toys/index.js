export const state = () => {
    return {
        products: [
            {
                id: 1,
                imgs: [
                    '1.png',
                    '2.png',
                    '3.png',
                ],
                name_tm: 'Etli somsa',
                // name_ru: 'Etli somsa',
                seller: 'Ayshe',
                date: '21.08.2022',
                price: 20,
                description_tm: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                // description_ru: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                liked: false,
                likes: 5
            },
            {
                id: 2,
                imgs: [
                    '1.png',
                    '2.png',
                    '3.png',
                ],
                name_tm: 'Etli somsa',
                // name_ru: 'Etli somsa',
                seller: 'Ayshe',
                date: '21.08.2022',
                price: 20,
                description_tm: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                // description_ru: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                liked: false,
                likes: 2
            },
            {
                id: 3,
                imgs: [
                    '1.png',
                    '2.png',
                    '3.png',
                ],
                name_tm: 'Etli somsa',
                // name_ru: 'Etli somsa',
                seller: 'Ayshe',
                date: '21.08.2022',
                price: 20,
                description_tm: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                // description_ru: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                liked: false,
                likes: 6
            },
            {
                id: 4,
                imgs: [
                    '1.png',
                    '2.png',
                    '3.png',
                ],
                name_tm: 'Etli somsa',
                // name_ru: 'Etli somsa',
                seller: 'Ayshe',
                date: '21.08.2022',
                price: 20,
                description_tm: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                // description_ru: 'Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!',
                liked: false,
                likes: 23
            },
        ],
    }
}

export const getters = {
    products (state){
        return state.products;
    },
    featuredToys(_, getters){
        return getters.products.filter((e) => e.likes >= 5);
    }
}