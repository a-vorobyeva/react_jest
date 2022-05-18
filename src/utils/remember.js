export const rememberDose = (dose) => {
    let diagnosis; 

    if (dose < 20) {
        diagnosis = `${dose} is normal: have a nice evening!`;
    } else {
        diagnosis = `${dose} is too much: rehab phone number is +1301-443-1124 `;
    }

    localStorage.setItem('dose', dose);

    alert(diagnosis);

    return diagnosis;
}