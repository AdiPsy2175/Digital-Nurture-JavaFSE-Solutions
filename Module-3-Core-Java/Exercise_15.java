// Exercise 15 - String Reversal

import java.util.Scanner;

public class Exercise_15 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        String reversedString = new StringBuilder(str).reverse().toString();

        System.out.println("Reversed String: " + reversedString);

        sc.close();
    }
}