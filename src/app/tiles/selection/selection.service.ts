import {ComponentRef, Injectable, ViewContainerRef} from '@angular/core';
import {TileInterface} from "../TileInterface";
import {TranslateComponent} from "../translate/translate.component";
import {PreviewComponent} from "../preview/preview.component";

@Injectable({
  providedIn: 'root'
})
export class SelectionService {


  private viewContainerRef!: ViewContainerRef;

  private tiles: TileInterface[] = [];

  private componentRefs: ComponentRef<any>[] = [];

  constructor() {
    this.init();
  }

  public init(): void {
    this.tiles.push({key: 'a', component: TranslateComponent, previewImage: "./assets/deepl.PNG"});
  }


  public showOverview(): void {
    this.clear();
    for (let tile of this.tiles) {
      let componentRef = this.viewContainerRef.createComponent(PreviewComponent);
      componentRef.setInput("source", tile.previewImage);
      this.componentRefs.push(componentRef);
      console.log("previewimage is: ", tile.previewImage);
      console.log("componentRef is: ", componentRef.instance);
    }
  }

  public keyPress(key: any): void {
    this.clear();
    for (let tile of this.tiles) {
      if (key === tile.key) {
        let componentRef = this.viewContainerRef.createComponent(tile.component);
        this.componentRefs.push(componentRef);
      }
    }


  }

  private clear(): void {
    for (let componentRef of this.componentRefs) {
      componentRef.destroy();
    }

    this.componentRefs = [];
    this.viewContainerRef.clear();
  }

  public setViewContainerRef(value: ViewContainerRef): void {
    this.viewContainerRef = value;
  }
}
