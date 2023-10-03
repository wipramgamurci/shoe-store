import { makeAutoObservable, runInAction } from 'mobx'

class AppStore {
  myBagCount = 0
  myBag = []
  product = []
  selectedProduct = {}
  grandTotal = 0

  constructor() {
    makeAutoObservable(this)
  }

  updateProduct(newValue) {
    this.product = newValue
  }

  updateSelectedProduct(newValue) {
    this.selectedProduct = newValue
  }

  recalculateBagCount() {
    this.myBagCount = this.myBag.length
  }

  addToBag(newValue) {
    runInAction(() => {
      this.myBag.push(newValue)
      this.recalculateBagCount()
      this.updateGrandTotal()
    })
  }

  removeItemFromBag(index) {
    if (index >= 0 && index < this.myBag.length) {
      this.myBag.splice(index, 1)
    }
    this.updateGrandTotal()
    this.recalculateBagCount()
  }

  updateQuantity(index, newQuantity) {
    if (index >= 0 && index < this.myBag.length) {
      this.myBag[index].quantity = newQuantity
    }
    this.updateGrandTotal()
  }

  updateGrandTotal() {
    this.grandTotal = this.myBag.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }
}

const appStore = new AppStore()
export default appStore
