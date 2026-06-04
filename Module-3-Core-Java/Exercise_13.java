// Exercise 13 - Recursive Fibonacci

import java.util.Scanner;

public class Exercise_13 {

    public static int fibonacci(int n) {

        if (n <= 1) {
            return n;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the value of n: ");
        int n = sc.nextInt();

        System.out.println("Fibonacci number at position " + n +
                " is " + fibonacci(n));

        sc.close();
    }
}