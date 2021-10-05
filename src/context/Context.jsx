import React, {useContext, useReducer} from 'react';

const Context = React.createContext()

export const useData = () => {
  return useContext(Context)
}

const SET_FILTERS = 'setFilters'
const SET_ITEMS = 'setItems'
const SET_ACTIVE_ITEM = 'setActiveItems'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FILTERS: return {...state, filters: action.newFilters}
    case SET_ITEMS: return {...state, items: action.newItems}
    case SET_ACTIVE_ITEM: return {...state, activeItem: action.activeItem}
    default: return state
  }
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    filters: {
        season: 'all seasons',
        color: 'all colors',
        price: 'cheap => expensive'
    },
    items: null,

  })

  const setFilters = (newFilters) => dispatch({type: SET_FILTERS, newFilters})
  const setItems = (newItems) => dispatch({type: SET_ITEMS, newItems})
  const setActiveItem = (activeItem) => dispatch({type: SET_ACTIVE_ITEM, activeItem})

  return (
    <Context.Provider value={{
    filters: state.filters,
    items: state.items,
    activeItem: state.activeItem,
    setFilters, setItems, setActiveItem,
    }}>
        { children }
    </Context.Provider>
  )
}

// AlertContext = Context
//useAlert = useData
//AlertProvider = StatePrivider