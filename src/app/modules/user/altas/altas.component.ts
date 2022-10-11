import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { addDoc, collection, CollectionReference, Firestore, getFirestore, onSnapshot, QuerySnapshot, Timestamp } from 'firebase/firestore';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { VariablesService } from 'src/app/services/variablesGL.service';
import { ContactoService } from 'src/app/services/contacto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  contactomodel = {
    nombre: '',
    apellidoPaterno: '',
    mensaje: '',
    telefono: ''
  }


  contactoForm: FormGroup;
  submitted: boolean;


  categories: any[] =
    [
      { name: 'Hepatitis.', key: 'Hepatitis.' },
      { name: 'Anemia.', key: 'Anemia.' },
      { name: 'arterial.', key: 'arterial.' },
      { name: 'Celiaco.', key: 'Celiaco.' },
      { name: 'Gastritis.', key: 'Gastritis.' },
      { name: 'Diabetes.', key: 'Diabetes.' },
      { name: 'Arterial.', key: 'Arterial.' },
      { name: 'Epilepsia.', key: 'Epilepsia.' },
      { name: 'Alergias.', key: 'Alergias.' },
      { name: 'Asma.', key: 'Asma.' }];
  date3: Date;

  es: any;
  checked2: boolean = true;
  selectedCategories: any[] = [];





  constructor(
    private contactoService: ContactoService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
  }


  async add() {
    const { nombre, apellidoPaterno, telefono, mensaje } = this.contactomodel;
    await this.contactoService.addAltas({
      nombre: nombre,              
      app: 
      apm: 
      fechaNa: 
      calle: 
      colonia: 
      codigoPostal: 
      noInterior: 
      estado: 
      municipio: 
      estadocivil: 
      correoElectro: 
      numeroTelefonico: 
      nombreInstitución: 
      dirrecciónInstitucion: 
      calleinstitucion: 
      coloniadesinstalación: 
      códigopostalInstiticion: 
      noInteriorInstitucion:
      estadoinstitución: 
      MunicipioInstitucion: 
      añodeIngreso: 
      añodeEgreso: 
      añodeEstudios: 
      recibióCertificado: 
      nombreEscSecundaria: 
      direccionEscSecundaria: 
      calleEscSecundaria: 
      coloniaEscSecundaria: 
      codigopostalEscSecundaria: 
      noInteriorEscSecundaria: 
      estadoEscSecundaria: 
      municipioEscSecundaria: 
      añodeIngresoEscSecundaria: 
      añodeEgresoEscSecundaria: 
      añosdeEstudioEscSecundaria: 
      recibioCertificadoEscSecundaria: 
      nombreInstitucionPreparatoria: 
      direccionInstitucionPreparatoria: 
      callePreparatoria: 
      coloniaPreparatoria: 
      codigopostalPreparatoria: 
      noInteriorPreparatoria: 
      estadoPreparatoria: 
      municipioPreparatoria: 
      añodeIngresoPreparatoria: 
      añodeEgresoPreparatoria: 
      añosdeEstudioPreparatoria: 
      recibioCertificadoPreparatoria: 
      nombreInstitucionSuperior: 
      direccionInstitucionSuperior: 
      calleSuperior: 
      coloniaSuperior: 
      codigopostalSuperior: 
      noInteriorSuperior: 
      estadoSuperior: 
      municipioSuperior: 
      añodeIngresoSuperior: 
      añodeEgresoSuperior: 
      añosdeEstudioSuperior: 
      recibioCertificadoSuperior: 
      nombreInstitucionMaestria: 
      direccionInstitucionMaestria: 
      calleMaestria: 
      coloniaMaestria: 
      codigopostalMaestria: 
      noInteriorMaestria: 
      estadoMaestria: 
      municipioMaestria: 
      añodeIngresoMaestria:
      añodeEgresoMaestria: 
      añosdeEstudioMaestria: 
      recibioCertificadoMaestria: 
      nombreInstitucionDoctorado: 
      direccionInstitucionDoctorado: 
      calleDoctorado: 
      coloniaDoctorado: 
      añodeIngresoDoctorado: 
      añodeEgresoDoctorado: 
      añosdeEstudioDoctorado: 
      recibioCertificadoDoctorado: 
      categoriaSalud: 
      especifiquePadecimiento: 
      puestoTrabajo: 
      numeroEmpleado: 

    });
    this.toastr.success('Alguien Se pondra en contacto!', 'Success');
  }




}



