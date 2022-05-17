class Calc {
    static pow = (x, y) => Math.pow(x, y);
    
    static random = (dose) => Math.round(dose/10) + Math.round(Math.random() * 10);
}

export default Calc;