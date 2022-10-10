import { Component, OnInit } from '@angular/core';

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
