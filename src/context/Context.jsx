import React, {useContext, useReducer} from 'react';
import { items } from '../data/items'

const Context = React.createContext()

export const useData = () => {
  return useContext(Context)
}

// const SHOW_ALERT = 'show'
// const HIDE_ALERT = 'hide'
const SET_FILTERS = 'setFilters'
const FILTER_ITEMS = 'filterItems'

const reducer = (state, action) => {
  switch (action.type) {
    // case SHOW_ALERT: return {...state, visible: true, text: action.text}
    // case HIDE_ALERT: return {...state, visible: false}
    case SET_FILTERS: return {...state, filters: action.newFilters}
    case FILTER_ITEMS: return {...state, sortedItems: action.newItems}
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
    initialItems: items,
    sortedItems: JSON.parse(JSON.stringify(items)),

  })

//   const show = text => dispatch({ type: SHOW_ALERT, text })
//   const hide = () => dispatch({ type: HIDE_ALERT })
  const setFilters = (newFilters) => dispatch({type: SET_FILTERS, newFilters})
  const filterItems = (newItems) => dispatch({type: FILTER_ITEMS, newItems})

  return (
    <Context.Provider value={{
    //   visible: state.visible,
    //   text: state.text,
    //   show, hide
    filters: state.filters,
    initialItems: state.initialItems,
    sortedItems: state.sortedItems,
    setFilters, filterItems,
    }}>
        { children }
    </Context.Provider>
  )
}

// AlertContext = Context
//useAlert = useData
//AlertProvider = StatePrivider