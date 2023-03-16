import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent {
   public heroes:string[] = ['SpiderMan','Batman','Acuman','SuperGirl']
   public lastHeroeDelete: string|undefined = undefined

   public deleteHereo(index:number):void{
    const hereoDeleted = this.heroes.splice(index, 1)
    this.lastHeroeDelete = hereoDeleted[0]
   }
}
