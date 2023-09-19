import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ShareLibService {
    constructor() {
        this._name = new BehaviorSubject('');
        this.name$ = this._name.asObservable();
    }
    addName(name) {
        this._name.next(name);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaGFyZS1saWIvc3JjL2xpYi9zaGFyZS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sT0FBTyxlQUFlO0lBQzFCO1FBQ1EsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLFVBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRjVCLENBQUM7SUFJaEIsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs4R0FQVSxlQUFlO2tIQUFmLGVBQWU7OzJGQUFmLGVBQWU7a0JBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaGFyZUxpYlNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIHByaXZhdGUgX25hbWUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgcmVhZG9ubHkgbmFtZSQgPSB0aGlzLl9uYW1lLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGFkZE5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZS5uZXh0KG5hbWUpO1xuICB9XG59XG4iXX0=