import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    component: AuthComponentComponent
  },
  {
    path: 'auth',
    component: AuthComponentComponent
  },
  {
    path: 'language',
    loadChildren: () => import('./lang/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./account/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'individual',
    loadChildren: () => import('./account/individual/individual.module').then( m => m.IndividualPageModule)
  },
  {
    path: 'choice',
    loadChildren: () => import('./choice/choice/choice.module').then( m => m.ChoicePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'allcategories',
    loadChildren: () => import('./allcategories/allcategories.module').then( m => m.AllcategoriesPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'prodcat',
    loadChildren: () => import('./prodcat/prodcat.module').then( m => m.ProdcatPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
