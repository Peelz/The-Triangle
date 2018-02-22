function rightTriangle(side1,side2)
{
    var a = side1*side1
    var b = side2*side2
    var result = Math.sqrt(a+b)

    return result
}

function isoscelesTriangle(side1,side2)
{
    if(side1>side2)
    {
        result = side1
    }
    else if(side1 == side2)
    {
        result = 1
    }
    else
    {
        result = side2
    }
    return result
}

function equilateralTriangle(side1,side2)
{
    if(side1 == side2)
    {
        result = side1

    }
    else
    {
        result = ""
    }
    return result

}

function scaleneTriangle(side1,side2)
{
    if(side1 == side2)
    {
        result = ""
    }
    else
    {
        result = (side1+side2)-1

    }
    return result
}