export const state = () => {
  return {
    liked_products: [
      {
        id: 3,
        imgs: ["1.png", "2.png", "3.png"],
        name_tm: "Etli somsa",
        name_ru: "Etli somsa",
        seller: "Ayshe",
        date: "21.08.2022",
        price: 20,
        description_tm:
          "Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!",
        description_ru:
          "Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!",
        liked: false,
        likes: 6,
      },
      {
        id: 4,
        imgs: ["1.png", "2.png", "3.png"],
        name_tm: "Etli somsa",
        name_ru: "Etli somsa",
        seller: "Ayshe",
        date: "21.08.2022",
        price: 20,
        description_tm:
          "Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!",
        description_ru:
          "Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!",
        liked: false,
        likes: 23,
      },
      {
        id: 5,
        imgs: ["1.png", "2.png", "3.png"],
        name_tm: "Etli somsa",
        name_ru: "Etli somsa",
        seller: "Ayshe",
        date: "21.08.2022",
        price: 20,
        description_tm:
          "Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!",
        description_ru:
          "Nalichi taze bishirilen etli somsa stugy 20man, 20 sany alana 5 sany SOWGAT!!!",
        liked: false,
        likes: 23,
      },
    ],

    count_liked: 3,
  };
};

export const mutations = {
  addToLiked(state, payload) {
    return state.liked_products.push(payload.product);
  },
  removeFromliked(state, payload){
    return state.liked_products.splice(payload.index, 1);
  }
};

export const actions = {
  addLike(context, payload) {
    return context.commit("addToLiked", payload);
  },
  removeFromLiked(context, payload){
    context.commit('removeFromliked', payload)
  }
};

export const getters = {
  liked_products(state) {
    return state.liked_products;
  },
  count_liked(state) {
    return state.liked_products.length
  },
};
