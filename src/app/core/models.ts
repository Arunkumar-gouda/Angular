export interface Product { id:number; name:string; brand:string; category:string; price:number; oldPrice:number; rating:number; reviews:number; image:string; badge?:string; stock:number; description:string; features:string[] }
export interface Category { name:string; icon:string; count:number; color:string }
export interface CartItem { product:Product; quantity:number }
export interface Order { id:string; customer:string; total:number; status:string; date:string; items:number }

