// Exercise 24 - ArrayList Example

import java.util.ArrayList;
import java.util.Scanner;

public class Exercise_24 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        ArrayList<String> studentNames = new ArrayList<>();

        System.out.print("How many students do you want to add? ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 1; i <= n; i++) {

            System.out.print("Enter student name " + i + ": ");
            String name = sc.nextLine();

            studentNames.add(name);
        }

        System.out.println("\nStudent Names:");

        for (String name : studentNames) {
            System.out.println(name);
        }

        sc.close();
    }
}