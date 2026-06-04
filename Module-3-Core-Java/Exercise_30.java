// Exercise 30 - Pattern Matching for Switch

public class Exercise_30 {

    public static void checkType(Object obj) {

        switch (obj) {

            case Integer i ->
                    System.out.println("Integer Value: " + i);

            case String s ->
                    System.out.println("String Value: " + s);

            case Double d ->
                    System.out.println("Double Value: " + d);

            case null ->
                    System.out.println("Object is null");

            default ->
                    System.out.println("Unknown Type");
        }
    }

    public static void main(String[] args) {

        checkType(100);
        checkType("Hello Java");
        checkType(99.99);
        checkType(null);
    }
}