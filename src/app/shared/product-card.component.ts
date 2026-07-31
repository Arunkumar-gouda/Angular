import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common'; import { RouterLink } from '@angular/router';
import { Product } from '../core/models'; import { StoreService } from '../core/store.service';
@Component({selector:'app-product-card',standalone:true,imports:[CurrencyPipe,RouterLink],changeDetection:ChangeDetectionStrategy.OnPush,template:`
<article class="product-card h-100">
 <div class="product-img"><a [routerLink]="['/products',product().id]"><img [src]="product().image" [alt]="product().name"></a>@if(product().badge){<span class="badge-label">{{product().badge}}</span>}<button class="heart" (click)="store.toggleWish(product())" aria-label="Toggle wishlist">♡</button></div>
 <div class="p-3"><small class="eyebrow">{{product().brand}}</small><a class="product-name" [routerLink]="['/products',product().id]">{{product().name}}</a><div class="rating">★ {{product().rating.toFixed(1)}} <span>({{product().reviews}})</span></div><div class="d-flex align-items-center justify-content-between mt-2"><div><strong class="price">{{product().price|currency}}</strong><del>{{product().oldPrice|currency}}</del></div><button class="add-btn" (click)="store.add(product())">＋</button></div></div>
</article>`}) export class ProductCardComponent { product=input.required<Product>(); constructor(public store:StoreService){} }
