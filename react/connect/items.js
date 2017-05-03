import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions/item'
import { connect } from 'react-redux'
import Items from '../components/utils/item'
import Item from '../components/items/item'

function mapStateToProps(state) {
  return {
    itemlist: state.itemlist,
    item: state.item,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch)
}

export const ItemsMap = connect(mapStateToProps, mapDispatchToProps)(Items)
export const ItemMap = connect(mapStateToProps, mapDispatchToProps)(Item)
