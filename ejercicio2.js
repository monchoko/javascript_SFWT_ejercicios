var ejercicio2 = [
    {
      nombre: 'Gabriel',
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: 'Jaime',
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: 'María',
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: 'Angel',
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: 'Fer',
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: 'Rachel',
      edad: 30,
      esFamiliar: true,
    },
  ];

let Fami_invit = []
for(let i = 0; i < ejercicio2.length; i++) {
  if (ejercicio2[i].edad >=18 && ejercicio2[i].esFamiliar){
    console.log(ejercicio2[i].nombre +" "+ "es invitado a la fiesta")
  }
}

