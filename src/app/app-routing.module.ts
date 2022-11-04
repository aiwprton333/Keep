import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'Signup',
    loadChildren: () => import('./Signup/Signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'setnewpassword',
    loadChildren: () => import('./setnewpassword/setnewpassword.module').then( m => m.SetnewpasswordPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then( m => m.PhotosPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'upload-photos',
    loadChildren: () => import('./upload-photos/upload-photos.module').then( m => m.UploadPhotosPageModule)
  },
  {
    path: 'tap1',
    loadChildren: () => import('./tap1/tap1.module').then( m => m.Tap1PageModule)
  },
  {
    path: 'photo-upload',
    loadChildren: () => import('./components/photo-upload/photo-upload-routing.module').then( m => m.PhotoUploadComponentRoutingModule)
  },
  {
    path: 'photos-list',
    loadChildren: () => import('./components/photos-list/photos-list-routing.module').then( m => m.PhotosListComponentRoutingModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
