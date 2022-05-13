import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RuntimeTech, TechColors} from '../../data';
import {TechColor} from '../../tech-color.enum';

@Component({
    selector: 'app-tech',
    templateUrl: './tech.component.html',
    styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {

    @Input() tech: RuntimeTech = {
        tech: {id: 0, name: "", requirements: [], description: "", provides: 0},
        provided: {},
        researched: false,
        researchDistance: 0,
        available: false
    };
    @Input() provided: TechColors = {};
    @Output() researched: EventEmitter<RuntimeTech> = new EventEmitter<RuntimeTech>();

    public showDescription = false;

    currentClasses: {} | undefined;
    techColorClasses: {
        'has-text-danger': boolean,
        'has-text-success': boolean,
        'has-text-warning': boolean,
        'has-text-link': boolean,
    } | undefined;

    setCurrentClasses() {
        this.currentClasses = {};
    }

    setTechColorClasses() {
        this.techColorClasses = {
            'has-text-danger': this.tech.tech.provides === TechColor.red,
            'has-text-success': this.tech.tech.provides === TechColor.green,
            'has-text-warning': this.tech.tech.provides === TechColor.yellow,
            'has-text-link': this.tech.tech.provides === TechColor.blue,
        };
    }

    constructor() {
    }

    ngOnInit() {
        this.setTechColorClasses();
        this.setCurrentClasses();
    }

    researchMe() {
        this.researched.emit(this.tech);
        this.setCurrentClasses();
    }

}
