import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { CounterComponent } from './counter.component';

@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[
        CounterComponent
    ],
    imports:[
        FormsModule
    ]
})

export class CounterModule{}