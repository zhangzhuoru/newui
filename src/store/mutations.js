// https://vuex.vuejs.org/en/mutations.html

export default {
  //
  addtocar(state,goods){
  	let flag = false
  	state.cart.some(item =>{
  		if(item.id == goods.id){
  			item.count += goods.count
  			flag = true
  			return true
  		}
  	})
  	if(!flag){
  		state.cart.push(goods)
  	}
  	localStorage.setItem('cart',window.JSON.stringify(state.cart))
  }
}
