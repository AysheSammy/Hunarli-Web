export const state = () => {
  return {
    categories: [
      {
        id: 1,
        name_tm: "Aşhana",
        name_ru: "Питание",
        sub_category_tm: [
          "Naharlar",
          "Salatlar",
          "Süýjilikler",
          "Hamyr önümleri",
          "Azyk önümler",
        ],
        sub_category_ru: [
          "Питание",
          "Салаты",
          "Десерты",
          "Выпечка",
          "Продукты питания",
        ],
        href: "/products",
        active: false,
        folder: 'meals/products'
      },
      {
        id: 2,
        name_tm: "Egin-eşik",
        name_ru: "Одежда",
        sub_category_tm: [
          "Ýaka / Tahýa",
          "Taýýar köýnek",
          "Çaga eşik",
          "Jempir",
          "Palto",
        ],
        sub_category_ru: [
          "Воротник / Хвост",
          "Готовое платье",
          "Детская одежда",
          "Джемпер",
          "Пальто",
        ],
        href: "/products",
        active: false,
        folder: 'clothes/products'
      },
      {
        id: 3,
        name_tm: "Şaý-sep",
        name_ru: "Ювелирные изделия",
        sub_category_tm: ["Bilezik", "Monjuk", "Täç", "Ýüzük"],
        sub_category_ru: ["Браслет", "Ожерелье", "Корона", "Кольцо"],
        href: "/products",
        active: false,
        folder: 'jewelry/products'
      },
      {
        id: 4,
        name_tm: "Toý serpaý",
        name_ru: "Свадьба окончена",
        sub_category_tm: ["Şekerlik", "El-işi", "Magnit"],
        sub_category_ru: ["Şekerlik", "Ручной работы", "Магнитный"],
        href: "/products",
        active: false,
        folder: 'wedding/products'
      },
      {
        id: 5,
        name_tm: "Oýunjak",
        name_ru: "Игрушка",
        sub_category_tm: [
          "Ýumşak oýunjak",
          "Tagtadan oýunjak",
          "Düzülýän oýunjak",
        ],
        sub_category_ru: [
          "Мягкая игрушка",
          "Деревянная игрушка",
          "Сборная игрушка",
        ],
        href: "/products",
        active: false,
        folder: 'toys/products'
      },
    ],
  };
};

export const mutations = {
  changeStateActive(state, payload) {
    state.categories[payload.index].active =
      !state.categories[payload.index].active;
  },
};

export const actions = {
  changeActive(context, payload) {
    context.commit("changeStateActive", payload);
  },
};

export const getters = {
  categories(state) {
    return state.categories;
  },
};
