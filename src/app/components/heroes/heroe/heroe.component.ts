import { Component } from "@angular/core";



@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    public name:string = "Batman";
    public age:number = 50;

    public getName():string{
        return `${this.name} - ${this.age} `;
    }

    public changeName():void{
        this.name = this.name === "Batman" ? "SpiderMan" : "Batman";
    }

    public changeAge():void{
        this.age = this.age === 50 ? 25 :50
    }

    get getCapitalesCase():string{
        return this.name.toUpperCase();
    }
}