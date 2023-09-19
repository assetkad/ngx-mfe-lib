import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class ShareLibService {
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

class ShareLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: ShareLibComponent, selector: "lib-share-lib", ngImport: i0, template: `
    <p>
      share-lib works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ShareLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-share-lib', template: `
    <p>
      share-lib works!
    </p>
  ` }]
        }] });

class ShareLibModule {
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

/*
 * Public API Surface of share-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ShareLibComponent, ShareLibModule, ShareLibService };
//# sourceMappingURL=share-lib.mjs.map
