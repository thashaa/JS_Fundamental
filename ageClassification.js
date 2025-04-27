let ageData = [10, 15, 20, 65, 30, 13, 75];

function ageCategory(age) {
    if (age >= 0 && age <=12) {
        return 'anak-anak';
    }
    else if (age >= 13 && age <=17){
        return 'remaja';
    }
    else if (age >= 18 && age <=59){
        return 'dewasa'
    }
    else if (age >= 60){
        return 'lansia';
    }
    else{
       return 'Invalid age';
    }
} 

function classification(ageData) {
    let category ={
        'anak-anak': 0,
        'remaja' : 0, 
        'dewasa' : 0,
        'lansia':0
    }

    // Loop untuk mengklasifikasikan usia dari array
  ageData.forEach(age => {
    let category2 = ageCategory(age);
    
    if (category2 !== 'Invalid age') {
      category[category2]++;
    } else {
      console.log(` ${age} is invalid`);
    }
  });

  // Menampilkan hasil klasifikasi
  console.log(`anak-anak: ${category['anak-anak']} orang`);
  console.log(`remaja: ${category['remaja']} orang`);
  console.log(`dewasa: ${category['dewasa']} orang`);
  console.log(`lansia: ${category['lansia']} orang`);
    
};


classification(ageData);
