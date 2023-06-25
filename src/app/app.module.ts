import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { MyworkComponent } from './mywork/mywork.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'mywork', component: MyworkComponent },
  // Weitere Routen definieren
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    MyworkComponent,
    AboutMeComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
