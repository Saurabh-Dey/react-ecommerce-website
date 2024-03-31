const filterReducer = (state, action) => {
    switch(action.type) {

        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
            // console.log(priceArr)

        let maxPrice = Math.max(...priceArr);
        
        // console.log(maxPrice)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice},
            };


            

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };

        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            };
        
        case "SORTING_PRODUCT":
            let newSortData;

            const { filter_products } = state;
            let tempSortProduct = [...filter_products];


            const sortingProducts = (a, b) => {
                if(state.sorting_value === "Lowest") {
                    return a.price - b.price;
                }

                if(state.sorting_value === "Highest") {
                    return b.price - a.price;
                }

                if(state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }

                if(state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            };

            
            newSortData = tempSortProduct.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortData,  
            };

        case "UPDATE_FILTER_VALUE":
            const {name, value} = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters, 
                    [name]: value,
                },
            };
        
        case "FILTER_PRODUCTS":

        let {all_products} = state;
        let tempFilterProduct = [...all_products];

        const {text, category, company, color, price} = state.filters;

        if(text) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text);
            });
        }

        if(category !== "All") {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.category === category;
            });
         }
    
        if(company !== "All") {
            tempFilterProduct = tempFilterProduct.filter((c) => c.company === company
            );
        }
 
        if(color !== "All") {
            tempFilterProduct = tempFilterProduct.filter((curElem) => 
                curElem.colors.includes(color)
            );
        }
        // if(price){
        //     tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price);
        // } 

        if(price === 0) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price === price);
        } else {
            tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price);
        }


        return {
            ...state,
            filter_products: tempFilterProduct,
        };

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    maxPrice: 0,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.maxPrice,
                },
            };

        default: 
            return state;
    }
};

export default filterReducer;