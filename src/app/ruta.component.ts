import { Component } from '@angular/core';

// Componentes de primefaces
import {DataTableModule,SharedModule, DataListModule} from 'primeng/primeng';
import {ButtonModule,DialogModule,OverlayPanel} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService, GrowlModule, Message} from 'primeng/primeng';

@Component({
  selector: 'ruta-selector',
  templateUrl: './ruta.component.html'  
})
export class RutaComponent {
    private enviosPresentar:any = [];
    title = 'app works Ronald12222aa!';
}