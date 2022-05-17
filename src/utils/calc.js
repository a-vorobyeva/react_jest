class Calc {
    static pow = (x, y) => Math.pow(x, y);
    
    static random = (dose) => dose + Math.round(Math.random() * 10);
}

export default Calc;