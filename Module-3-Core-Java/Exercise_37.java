// Exercise 37 - Using javap to Inspect Bytecode

public class Exercise_37 {

    public void displayMessage() {
        System.out.println("Hello Bytecode");
    }

    public static void main(String[] args) {

        Exercise_37 obj = new Exercise_37();

        obj.displayMessage();
    }
}

//The class was compiled successfully. The javap tool could not be executed directly because it was not configured in the system PATH, but the purpose of the exercise was to inspect Java bytecode generated from the compiled class.