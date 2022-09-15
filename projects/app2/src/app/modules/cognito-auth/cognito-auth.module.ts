import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  { path: '', component: SignInComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  declarations: [
    SignInComponent,
    ProfileComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CognitoAuthModule { }
