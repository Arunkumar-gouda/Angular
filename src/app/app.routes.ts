import { Routes } from '@angular/router';
export const routes:Routes=[
 {path:'',loadComponent:()=>import('./features/home.component').then(m=>m.HomeComponent)},
 {path:'products',loadComponent:()=>import('./features/products.component').then(m=>m.ProductsComponent)},
 {path:'products/:id',loadComponent:()=>import('./features/product-detail.component').then(m=>m.ProductDetailComponent)},
 {path:'cart',loadComponent:()=>import('./features/cart.component').then(m=>m.CartComponent)},
 {path:'checkout',loadComponent:()=>import('./features/checkout.component').then(m=>m.CheckoutComponent)},
 {path:'login',loadComponent:()=>import('./features/auth.component').then(m=>m.AuthComponent),data:{mode:'login'}},
 {path:'register',loadComponent:()=>import('./features/auth.component').then(m=>m.AuthComponent),data:{mode:'register'}},
 {path:'forgot-password',loadComponent:()=>import('./features/auth.component').then(m=>m.AuthComponent),data:{mode:'forgot'}},
 {path:'profile',loadComponent:()=>import('./features/account.component').then(m=>m.AccountComponent),data:{page:'profile'}},
 {path:'orders',loadComponent:()=>import('./features/account.component').then(m=>m.AccountComponent),data:{page:'orders'}},
 {path:'wishlist',loadComponent:()=>import('./features/account.component').then(m=>m.AccountComponent),data:{page:'wishlist'}},
 {path:'addresses',loadComponent:()=>import('./features/account.component').then(m=>m.AccountComponent),data:{page:'addresses'}},
 {path:'admin',loadComponent:()=>import('./features/admin.component').then(m=>m.AdminComponent)},
 {path:'**',redirectTo:''}
];
