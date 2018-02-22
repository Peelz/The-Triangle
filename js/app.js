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
                var result = side1
            }
            else if(side1 == side2)
            {
                var result = 1
            }
            else
            {
                var result = side2
            }
            return result
        }
        
        function equilateralTriangle(side1,side2)
        {
            if(side1 == side2)
            {
                var result = side1

            }
            else
            {
                var result = x
            }
            return result

        }
        
        function scaleneTriangle(side1,side2)
        {
            if(side1 == side2)
            {
                var result = x
            }
            else
            {
                var result = (side1+side2)-1

            }
            return result
        }