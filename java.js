function funkcja()
{
    var rodzaj = document.getElementById("rodzaj").value;
    var litry = document.getElementById("litry").value;
    var koszt;
    var wynik;
    if(rodzaj==1)
    {
        koszt = 4;
    }
    else if(rodzaj==2)
    {
        koszt = 3.5;
    }
    else
    {
        koszt = 0;
    }
    wynik = koszt*litry;
    document.getElementById("wynik").innerHTML = "koszt paliwa: " + wynik + "zł";
}