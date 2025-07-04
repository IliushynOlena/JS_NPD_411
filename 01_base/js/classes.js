class Car{
    constructor(model,year,color)
    {
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }
    //setter
    set Speed(value)
    {
        if(value >= 0)
            this.speed = value;
        else
            this.speed = 0;
    }
    //getter
    get Mils()
    {
        return this.speed *0.621;
    }
    setSpeed(value)
    {
        if(value >= 0)
            this.speed = value;
        else
            this.speed = 0;
    }
    paint(newColor)
    {
        this.color = newColor;
    }
    print(){
        console.log(`Car : ${this.model}. ${this.year}. ${this.color}. ${this.speed} km/h`);
    }
}
//================ Extends ===============
class PoliceCar extends Car
{
    constructor(model, year,color, volume)
    {
        super(model,year,color);
        this.volume = volume;
    }
    beep()
    {
        console.log("Stop! Beep....beep...beep... Volume: " + this.volume);
    }
    print()
    {
        super.print();
        console.log("Volume = " + this.volume);
    }
}
var police = new PoliceCar("Toyota",2022,"white",800);
police.beep();
police.setSpeed(220);
police.print();

var myCar = new Car("Nissan",2010,"Grey");
myCar.paint("Pink");
// myCar.model = "Nissan";
// myCar.year = 2010;
// myCar.color = "Grey";
// myCar.speed = 150;
myCar.setSpeed(160);
myCar.print();

myCar.Speed = 220;
myCar.print();

console.log("Speed in miles : " + myCar.Mils.toFixed(1) + " mi/h");