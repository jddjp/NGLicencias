import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { addDoc, collection, CollectionReference, Firestore, getFirestore, onSnapshot, QuerySnapshot, Timestamp } from 'firebase/firestore';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { VariablesService } from 'src/app/services/variablesGL.service';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
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
  constructor() { }
  selectedCategories: any[] = [];
  ngOnInit(): void {
    // this.selectedCategories = this.categories.slice(1, 3);
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





}
export class AltausuariosService {

  db: Firestore;
  altausuarios: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  contactomodel = {
    name: '',
    correo: '',
    mensaje:'',
    telefono:''
  }

  constructor(

    //added Alta 
    private contactoService: ContactoService,
    private toastr: ToastrService,
  ) {

    this.db = getFirestore();
    this.altausuarios = collection(this.db, 'Altas de Usuarios');
    // Get Realtime Data
    console.log(this.altausuarios);

    onSnapshot(this.altausuarios, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }


  
  async addaltausuari(id: number, nombre: string, apm: string, app: string, copostal: number, colonia: string, 
    dirreccion: string, fechanacimiento:Timestamp ,nointerior: number,) {
    await addDoc(this.altausuarios, {
      id,
      nombre,
      apm,
      app,
      copostal,
      colonia,
      dirreccion,
      fechanacimiento,
      nointerior
      
    })
    return this.toastr.success('Registro Guardado  con exito!!', 'Exito');
  }

  //Add alta service
  async add() {
    const { name, correo,telefono,mensaje } = this.contactomodel;
    await   this.contactoService.addAltas({
      nombre: name,
      correo: correo,
      telefono: telefono,
      mensaje: mensaje,
    });
    this.toastr.success('Alguien Se pondra en contacto!', 'Success');
  }


}
