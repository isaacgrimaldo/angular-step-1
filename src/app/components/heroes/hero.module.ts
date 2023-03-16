import { CommonModule } from '@angular/common'
import { NgModule  } from '@angular/core'

//Componentes
import {HeroeComponent} from './heroe/heroe.component'
import {ListComponent} from './list/list.component'


@NgModule({
    declarations:[
        HeroeComponent,
        ListComponent
    ],
    exports:[
        ListComponent,
    ],
    imports:[
        CommonModule
    ]
})

export class HeroModule {}