// Exercise 29 - Records

import java.util.Arrays;
import java.util.List;

record Person(String name, int age) {}

public class Exercise_29 {

    public static void main(String[] args) {

        Person p1 = new Person("Aditya", 21);
        Person p2 = new Person("Rahul", 17);
        Person p3 = new Person("Priya", 22);

        System.out.println("Person Records:");

        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);

        List<Person> persons = Arrays.asList(p1, p2, p3);

        System.out.println("\nPersons with age >= 18:");

        persons.stream()
                .filter(person -> person.age() >= 18)
                .forEach(System.out::println);
    }
}