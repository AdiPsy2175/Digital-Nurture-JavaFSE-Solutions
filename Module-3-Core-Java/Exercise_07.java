// Exercise 07 - Type Casting Example

public class Exercise_07 {

    public static void main(String[] args) {

        double doubleValue = 25.75;
        int intValue = (int) doubleValue;

        System.out.println("Double Value: " + doubleValue);
        System.out.println("After Casting to Int: " + intValue);

        int number = 50;
        double convertedDouble = (double) number;

        System.out.println("Integer Value: " + number);
        System.out.println("After Casting to Double: " + convertedDouble);
    }
}