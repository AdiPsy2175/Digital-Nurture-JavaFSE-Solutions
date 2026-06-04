// Exercise 40 - Virtual Threads

public class Exercise_40 {

    public static void main(String[] args) {

        long startTime = System.currentTimeMillis();

        for (int i = 1; i <= 100; i++) {

            int threadNumber = i;

            Thread.startVirtualThread(() -> {
                System.out.println("Virtual Thread " + threadNumber);
            });
        }

        long endTime = System.currentTimeMillis();

        System.out.println("Execution Time: "
                + (endTime - startTime) + " ms");
    }
}
//
//We used 100 instead of 100,000: To keep the console output manageable while demonstrating virtual thread creation.