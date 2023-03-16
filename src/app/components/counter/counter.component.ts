import { Component } from '@angular/core'

@Component({
    selector:'app-counter',
    template:`
    <h1>{{ title}}</h1>
    <h2>this a counter app</h2>

    <h2>Configs</h2>
    <p>choose the base to make the operations. Current base <strong>{{base}}</strong></p>
    <input id="base"  type="number" [(ngModel)]="base"  >

    <h2>Counter</h2>
    <div>
        <button
         (click)="accumulate(base)"
        >
           + {{ base }}
        </button>

        <strong>
          {{counter}}
        </strong>

        <button
         (click)="accumulate(-base)"
         >
          - {{base}}
        </button>
    </div>
    
    `
})

export class CounterComponent {
    public base:number = 1
    public title:string = 'App Counter';
    public counter:number = 0;

    public accumulate(value:number){
        this.counter += value;
    }
}