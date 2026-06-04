// Exercise 27 - Lambda Expressions

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Exercise_27 {

    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Rahul");
        names.add("Aditya");
        names.add("Priya");
        names.add("Amit");

        System.out.println("Before Sorting:");
        System.out.println(names);

        Collections.sort(names, (name1, name2) -> name1.compareTo(name2));

        System.out.println("After Sorting:");
        System.out.println(names);
    }
}