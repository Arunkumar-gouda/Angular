import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from './models';
@Injectable({providedIn:'root'}) export class StoreService {
 readonly cart=signal<CartItem[]>([]); readonly wishlist=signal<Product[]>([]); readonly dark=signal(localStorage.getItem('theme')==='dark');
 readonly cartCount=computed(()=>this.cart().reduce((n,i)=>n+i.quantity,0)); readonly total=computed(()=>this.cart().reduce((n,i)=>n+i.product.price*i.quantity,0));
 add(product:Product){this.cart.update(items=>{const found=items.find(i=>i.product.id===product.id); return found?items.map(i=>i.product.id===product.id?{...i,quantity:i.quantity+1}:i):[...items,{product,quantity:1}]})}
 quantity(id:number,delta:number){this.cart.update(x=>x.map(i=>i.product.id===id?{...i,quantity:Math.max(1,i.quantity+delta)}:i))}
 remove(id:number){this.cart.update(x=>x.filter(i=>i.product.id!==id))}
 toggleWish(p:Product){this.wishlist.update(x=>x.some(i=>i.id===p.id)?x.filter(i=>i.id!==p.id):[...x,p])}
 toggleTheme(){this.dark.update(x=>!x);localStorage.setItem('theme',this.dark()?'dark':'light')}
}
