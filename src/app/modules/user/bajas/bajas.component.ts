import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { ContactoModel } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { ExcelService } from 'src/app/services/excel.service';
import { AltasComponent } from '../altas/altas.component';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.component.html',
  styleUrls: ['./bajas.component.css']
})
export class BajasComponent implements OnInit {
  contactomodel = {
    nombre: '',
    app: '',
    apm: '',
    fechaNa: '',
    calle : '',
    colonia: '',
    codigoPostal: '',
    noInterior: '',
    estado: '',
    municipio: '',
    estadocivil: '',
    correoElectro: '',
    numeroTelefonico: '',
    nombreInstiticion: '',
    dirrecciónInstitucion: '',
    calleinstitucion: '',
    coloniadesInstiticion: '',
    códigopostalInstiticion: '',
    noInteriorInstitucion: '',
    estadoInstitucion: '',
    MunicipioInstitucion: '',
    aniodeIngreso: '',
    aniodeEgreso: '',
    aniodeEstudios: '',
    recibióCertificado: '',
    nombreEscSecundaria: '',
    direccionEscSecundaria: '',
    calleEscSecundaria: '',
    coloniaEscSecundaria: '',
    codigopostalEscSecundaria: '',
    noInteriorEscSecundaria: '',
    estadoEscSecundaria: '',
    municipioEscSecundaria: '',
    aniodeIngresoEscSecundaria: '',
    aniodeEgresoEscSecundaria: '',
    aniosdeEstudioEscSecundaria: '',
    recibioCertificadoEscSecundaria: '',
    nombreInstitucionPreparatoria: '',
    direccionInstitucionPreparatoria: '',
    callePreparatoria: '',
    coloniaPreparatoria: '',
    codigopostalPreparatoria: '',
    noInteriorPreparatoria: '',
    estadoPreparatoria: '',
    municipioPreparatoria: '',
    aniodeIngresoPreparatoria: '',
    aniodeEgresoPreparatoria: '',
    aniosdeEstudioPreparatoria: '',
    recibioCertificadoPreparatoria: '',
    nombreInstitucionSuperior: '',
    direccionInstitucionSuperior: '',
    calleSuperior: '',
    coloniaSuperior: '',
    codigopostalSuperior: '',
    noInteriorSuperior: '',
    estadoSuperior: '',
    municipioSuperior: '',
    aniodeIngresoSuperior: '',
    aniodeEgresoSuperior: '',
    aniosdeEstudioSuperior: '',
    recibioCertificadoSuperior: '',
    nombreInstitucionMaestria: '',
    direccionInstitucionMaestria: '',
    calleMaestria: '',
    coloniaMaestria: '',
    codigopostalMaestria: '',
    noInteriorMaestria: '',
    estadoMaestria: '',
    municipioMaestria: '',
    aniodeIngresoMaestria: '',
    aniodeEgresoMaestria: '',
    aniosdeEstudioMaestria: '',
    recibioCertificadoMaestria: '',
    nombreInstitucionDoctorado: '',
    direccionInstitucionDoctorado: '',
    calleDoctorado: '',
    coloniaDoctorado: '',
    aniodeIngresoDoctorado: '',
    aniodeEgresoDoctorado: '',
    aniosdeEstudioDoctorado: '',
    recibioCertificadoDoctorado: '',
    categoriaSalud: '',
    especifiquePadecimiento: '',
    puestoTrabajo: '',
    numeroEmpleado: '',
    noAnioenelpuesto: '',
    puestosAnteriores: '',
    departamentooArea: '',
    aptitudesCH: '',
    historial: '',
    nombreInstitucion:'',
    direccionInstitucion:'',
    codigopostalInstitucion:'',
    estadoinstitucion:'',
    aniodeEstudioEscSecundaria:'',
    aniodeEstudioPreparatoria:'',
    aniodeEstudioSuperior:'',
    aniodeEstudioMaestria:'',
    aniodeEstudioDoctorado:'',
    coloniainstitucion:'',
    correoElectronico:''
  }
  contactosCollectiondata: { id: string, titulo: string, fechaInicio: Date, fechaFin: Date }[] | any = [];
  convocatoriaForm: FormGroup;
  submitted: boolean;

  visible: boolean;
 
  altasUsuariosModel: any;
visibleDe:boolean = false
id: any;
  constructor(

    private contactoService: ContactoService,
    private toastr: ToastrService,
    private firebaseService: ContactoService,
    private fb: FormBuilder,
    private exporExcel: ExcelService,
    private confirmationService: ConfirmationService,
    ) {

  }


  ngOnInit(): void {
    this.initForm();

    this.get();
    this.firebaseService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updatecontactoCollection(snapshot);
    })
  }

  initForm() {
    this.convocatoriaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],

    })
  }

  async add() {
    this.submitted = true;
    // this.visible = false
    // if (this.convocatoriaForm.valid) {
      if (this.altasUsuariosModel.nombre.trim() && this.altasUsuariosModel.app.trim() && this.altasUsuariosModel.apm.trim()) {
        if (this.altasUsuariosModel.id) {
          this.firebaseService.updatecontacto(this.altasUsuariosModel.nombre, this.altasUsuariosModel.app, this.altasUsuariosModel.apm, this.altasUsuariosModel.id)
          this.visible = false
         
          
        } else {
          
          const { nombre, app, apm} = this.altasUsuariosModel;
          await this.firebaseService.addcontacto(nombre, app, apm);
          this.convocatoriaForm.reset()
this.visible = false
this.submitted = false

          
        }
      }

    // } else {

    //   this.toastr.info('Todos los Campos son requeridos!!', 'Espera');
    //   this.visible = true
    //   this.convocatoriaCollectiondata.reset()
    // }
    // this.convocatoriaModelDialog = false;
    // this.convocatoriaModel;

  }

  async get() {
    const snapshot = await this.firebaseService.getcontactos();
    newFunction();

    function newFunction() {
      this.updatecontactoCollection(snapshot);
    }
  }

  updatecontactoCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.contactosCollectiondata = [];
    snapshot.docs.forEach((student) => {
      this.contactosCollectiondata.push({ ...student.data(), id: student.id });
    })
  }

  async delete(docId: any) {
    this.confirmationService.confirm({
      message: '¿Está seguro de que desea eliminar la convocatoria  '+ docId.titulo + '?',
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.firebaseService.deletecontacto(docId.id);
      }
  });
  }

  edit: boolean = false;
  editar(contactomodel: any) {
    this.visible = true
    this.altasUsuariosModel= { ...contactomodel }

  }
  update(id: any) {

  }



  Excel() {
    this.exporExcel.convoc(this.contactosCollectiondata)

  }

  openNew() {
    this. altasUsuariosModel= { nombre: '', app: '', apm: '' }
    this.visible = true;
    
  }
  hideDialog() {
    this.visibleDe = false;
    this.visible = false;
    this.submitted = false;
  }
}
