import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { Chapter1Component } from './app/chapter1/chapter1.component';
import { IntroComponent } from './app/intro/intro.component';
import { Chapter2aComponent } from './app/chapter2a/chapter2a.component';
import { Chapter2bComponent } from './app/chapter2b/chapter2b.component';
import { Chapter3aComponent } from './app/chapter3a/chapter3a.component';
import { Chapter3bComponent } from './app/chapter3b/chapter3b.component';
import { Chapter3cComponent } from './app/chapter3c/chapter3c.component';
import { Chapter4aComponent } from './app/chapter4a/chapter4a.component';
import { Chapter4bComponent } from './app/chapter4b/chapter4b.component';

const appRoutes: Routes = [
    {
        path: '',
        component: IntroComponent
    },
    {
        path: 'chapter1',
        component: Chapter1Component
    },
    {
        path: 'chapter2a',
        component: Chapter2aComponent
    },
    {
        path: 'chapter2b',
        component: Chapter2bComponent
    },
    {
        path: 'chapter3a',
        component: Chapter3aComponent
    },
    {
        path: 'chapter3b',
        component: Chapter3bComponent
    },
    {
        path: 'chapter3c',
        component: Chapter3cComponent
    },
    {
        path: 'chapter4a',
        component: Chapter4aComponent
    },
    {
        path: 'chapter4b',
        component: Chapter4bComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);