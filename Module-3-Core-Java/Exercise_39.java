// Exercise 39 - Reflection in Java

import java.lang.reflect.Method;

class Student {

    public void display() {
        System.out.println("Student Method Invoked");
    }
}

public class Exercise_39 {

    public static void main(String[] args) {

        try {

            Class<?> cls = Class.forName("Student");

            System.out.println("Methods in Student class:");

            Method[] methods = cls.getDeclaredMethods();

            for (Method method : methods) {
                System.out.println(method.getName());
            }

            Object obj = cls.getDeclaredConstructor().newInstance();

            Method method = cls.getMethod("display");

            method.invoke(obj);

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());

        }
    }
}