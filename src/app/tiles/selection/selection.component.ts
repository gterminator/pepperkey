import {ChangeDetectorRef, Component, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SelectionService} from "./selection.service";
const electron = (<any>window).require('electron');



@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {


  @ViewChild('components', {static: true, read: ViewContainerRef})
  viewContainerRef!: ViewContainerRef;


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log("pressed", event);
    this.selectionService.keyPress(event.key);
  }

  constructor(protected selectionService: SelectionService, protected changeDetector: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.selectionService.setViewContainerRef(this.viewContainerRef);
    this.selectionService.showOverview();



    electron.ipcRenderer.on("OPEN", () => {
      this.selectionService.showOverview();
      this.changeDetector.detectChanges();
    });

    electron.ipcRenderer.on("CLOSE", () => {
      this.selectionService.showOverview();
      this.changeDetector.detectChanges();
    });

  }
}
