export const cart = [{

}];
export function addToCart (){
    let matchingItem;

    cart.forEach((cartItem) => {
      if (products === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: products,
        quantity: 1
      });
    }
}