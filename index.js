const work = 218; //Nombre de jours travaillés
const ca = 25; // Nombre de congés

//!Fonction qui calcule le nombre de RTT

const rtt = (year, work, ca) => {
    let numberOfDays = "";
    let numberOfFerier = 0;

    // Savoir si l'année est bissextile
    if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
        numberOfDays = 366;
    } else {
        numberOfDays = 365;
    }

    //Tableau des jours fériés
    const JoursFerier = [
        new Date(year, 00, 01), //1er janvier
        new Date(year, 04, 01), // Fete Travail
        new Date(year, 03, 13),
        new Date(year, 04, 08), //Victoire 1945
        new Date(year, 04, 13), // Ascension
        new Date(year, 04, 24), // Pentecote
        new Date(year, 06, 24), // Fete National
        new Date(year, 07, 15), // Assomption
        new Date(year, 10, 01), // Toussaint
        new Date(year, 10, 11), // Armistice
        new Date(year, 11, 25), //Noêl
    ];

    //Calcul des nombres de jour fériers qui ne tombe pas sur un week end
    for (let i = 0; i < JoursFerier.length; i++) {
        if (JoursFerier[i].getDay() !== 0 && JoursFerier[i].getDay() !== 6) {
            numberOfFerier++;
        }
    }

    //Calcul du nombre de samedi et dimanche
    const start = new Date(year, 00, 01);
    let week = 0;

    console.log(start);
    for (let i = 0; i < numberOfDays; i++) {
        if (start.getDay() === 0 || start.getDay() === 6) {
            week += 1;
            start.setDate(start.getDate() + 1);
        } else {
            start.setDate(start.getDate() + 1);
        }
    }

    return numberOfDays - work - ca - week - numberOfFerier;
};

console.log(rtt(2020, work, ca));
