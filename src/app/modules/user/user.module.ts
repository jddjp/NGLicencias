import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//MODULOS PERZONALIZADOS
import { AuthModule } from '../../auth/auth.module';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user.component';

//PrimeNG
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';

import { CategoriasComponent } from './categorias/categorias.component';
import { NominacionesComponent } from './nominaciones/nominaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiInformacionComponent } from './mi-informacion/mi-informacion.component';
import { MisNominacionesComponent } from './mis-nominaciones/mis-nominaciones.component';
import { AddNominacionComponent } from './mis-nominaciones/add-nominacion/add-nominacion.component';
import { InputTextModule } from 'primeng/inputtext';
import { AltasComponent } from './altas/altas.component';
import { BajasComponent } from './bajas/bajas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ReportesComponent } from './reportes/reportes.component';
import {CalendarModule} from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthModule,
        UserRoutingModule,
        SharedModule,
        //PrimeNG
        ToastModule,
        CardModule,
        DropdownModule,
        SidebarModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        CheckboxModule,
        InputSwitchModule,
        CalendarModule,
        ToolbarModule,
        DialogModule,
        ConfirmDialogModule,
     
    ], providers: [ConfirmationService],
    declarations: [
        UserComponent,
        CategoriasComponent,
        NominacionesComponent,
        ContactoComponent,
        InicioComponent,
        MiInformacionComponent,
        MisNominacionesComponent,
        AddNominacionComponent,
        AltasComponent,
        BajasComponent,
        BusquedaComponent,
        ReportesComponent,
    ],
})
export class UserModule { }
