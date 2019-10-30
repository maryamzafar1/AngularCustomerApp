import {Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
    'selector':'app-filter-textbox',
    'templateUrl':'./filter-textbox.component.html'
})

export class FilterTextBoxComponent implements OnInit{

    constructor(){}

    private _filter: string;

    @Input() get filter():string{
        return this._filter;
    }

    set filter(value: string){
        this._filter=value;
        this.changed.emit(this._filter);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

   
    ngOnInit(){
        
    }
}