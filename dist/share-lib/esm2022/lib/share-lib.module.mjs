import { NgModule } from '@angular/core';
import { ShareLibComponent } from './share-lib.component';
import { ShareLibService } from './share-lib.service';
import * as i0 from "@angular/core";
export class ShareLibModule {
    static forRoot() {
        return {
            ngModule: ShareLibModule,
            providers: [ShareLibService],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.5", ngImport: i0, type: ShareLibModule, declarations: [ShareLibComponent], exports: [ShareLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ShareLibComponent],
                    imports: [],
                    exports: [ShareLibComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlLWxpYi9zcmMvbGliL3NoYXJlLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQU90RCxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7OEdBTlUsY0FBYzsrR0FBZCxjQUFjLGlCQUpWLGlCQUFpQixhQUV0QixpQkFBaUI7K0dBRWhCLGNBQWM7OzJGQUFkLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaGFyZUxpYkNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmUtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZUxpYlNlcnZpY2UgfSBmcm9tICcuL3NoYXJlLWxpYi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2hhcmVMaWJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW1NoYXJlTGliQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNoYXJlTGliTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1NoYXJlTGliU2VydmljZV0sXG4gICAgfTtcbiAgfVxufVxuIl19