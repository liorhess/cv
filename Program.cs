// See https://aka.ms/new-console-template for more information
var x = RunTheMethod(Multiply, 2, 3);
System.Console.WriteLine(x);



static int Add(int num1, int num2)
    {
        return num1 + num2;
    }

    static int Multiply(int num1, int num2)
    {
        return num1 * num2;
    }
    

    static int RunTheMethod(MyDelegate myMethodName, int num1, int num2)
    {
        return myMethodName.Invoke(num1, num2);
    }

    delegate int MyDelegate(int a, int b);