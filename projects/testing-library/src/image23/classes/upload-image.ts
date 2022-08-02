import { Directive, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Directive()
export abstract class UploadImage implements ControlValueAccessor {

    @Input()
    maxImages: number;

    @Input()
    s3Category: any;

    @Input()
    multiple: boolean;

    constructor() { }

    onChange = (_: any) => { };
    onTouched = () => { };
    writeValue(obj: any): void {}
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }    
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }    

}